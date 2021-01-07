import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import Tabs from "../../commons/Tabs";
import List from "./partials/StoresList";
import CreateStore from "./partials/CreateStore";
import styles from "./styles";

export default () => {
  const imAdminIn = (stores) => {
    let filter = [];
    for (let i = 0; i < stores.length; i++) {
      if (stores[i].admins.length > 0) {
        for (let j = 0; j < stores[i].admins.length; j++) {
          if (stores[i].admins[j]._id == user._id) filter.push(stores[i]);
        }
      }
    }
    return filter;
  };

  const tabs = {
    ownStores: "Mis comercios",
    adminStores: "Administrados",
    newStore: "Crear comercio",
  };

  const [tabSelected, setTabSelected] = useState(tabs.ownStores);
  const [message, setMessage] = useState("");

  const { user } = useSelector((state) => state.usersReducer);
  const { stores } = useSelector((state) => state.storesReducer);
  const myStores = stores.filter((el) => el.superAdmin === user._id);
  const adminStores = imAdminIn(stores);

  const renderTab = () => {
    switch (tabSelected) {
      case tabs.ownStores:
        return <List data={myStores} />;
      case tabs.adminStores:
        return <List data={adminStores} />;
      case tabs.newStore:
        return (
          <CreateStore
            setMessage={setMessage}
            restoreTab={() => setTabSelected(tabs.ownStores)}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <Tabs
        tabs={Object.values(tabs)}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
      />

      {message ? (
        <View style={styles.alertContainer}>
          <Text
            style={
              message.length == 28 ? styles.createdMessage : styles.errorMessage
            }
          >
            {message}
          </Text>
        </View>
      ) : null}

      <View style={styles.viewMarkets}>{renderTab()}</View>
    </View>
  );
};

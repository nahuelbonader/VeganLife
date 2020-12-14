import React, { useState } from "react";
import { View, Text } from "react-native";
import List from "./CommerceList";
import Tabs from "../components/Tabs";
import CreateStore from "./CreateStore";
import styles from "../styles/myStores";

const MyCommerce = ({ stores, imAdminIn }) => {
  const tabs = {
    ownStores: "Mis comercios",
    adminStores: "Administrados",
    newStore: "Crear comercio",
  };

  const [tabSelected, setTabSelected] = useState(tabs.ownStores);
  const [message, setMessage] = useState("");

  const renderTab = () => {
    switch (tabSelected) {
      case tabs.ownStores:
        return <List data={stores} />;
      case tabs.adminStores:
        return <List data={imAdminIn} />;
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

export default MyCommerce;

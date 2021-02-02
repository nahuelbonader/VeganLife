import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { editStore } from "../../store/actions/stores";

import List from "./partials/AdminsList";

import styles from "./styles";
import colors from "../../styles/colors";

const SuperAdminConfigs = ({ route }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);

  const [input, setInput] = useState("");
  const storeId = route.params.storeId;

  const { stores } = useSelector((state) => state.storesReducer);
  const [store] = stores.filter((s) => s._id == route.params.storeId);

  const [admins, setAdmins] = useState([]);
  const [errMessage, setMessage] = useState("");

  useEffect(() => {
    setAdmins(store.admins);
  }, [store.admins]);

  const handleSubmit = () => {
    let bool = true;
    let newAdmin = users.filter((el) => {
      return input == el.email ? el._id : null;
    });
    if (!newAdmin[0]) {
      setMessage("El correo ingresado no existe");
      setTimeout(function () {
        setMessage("");
      }, 5000);
      return;
    }
    admins.map((el) => {
      if (el._id === newAdmin[0]._id) {
        bool = false;
        setMessage("El usuarios ya es admin");
        setTimeout(function () {
          setMessage("");
        }, 5000);
      }
    });

    if (bool) {
      dispatch(
        editStore({ ...store, admins: [...store.admins, newAdmin[0]._id] })
      );
      setInput("");
    }
  };

  const handleDelete = (adminId) => {
    dispatch(
      editStore({ ...store, admins: admins.filter((el) => el._id !== adminId) })
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.firstView}>
        <Text style={styles.text}>¿Quieres agregar un Administrador?</Text>
        <Text style={styles.txt}>Ingresa el correo de la persona</Text>
        <TextInput
          autoCapitalize="none"
          placeholder="email"
          value={input}
          onChangeText={(text) => setInput(text)}
          style={styles.input}
        />
        {errMessage ? <Text style={styles.err}>{errMessage}</Text> : null}
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}> Crear admin </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondView}>
        <Text style={admins.length > 0 ? styles.txt2 : styles.txt2Carrot}>
          Administradores del comercio
        </Text>
        <View style={styles.line}></View>
        <View style={{ backgroundColor: colors.container }}>
          {admins.length > 0 ? (
            <List data={admins} handleDelete={handleDelete} />
          ) : (
            <Text style={styles.defaultMessage}>
              No agregaste administradores
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default SuperAdminConfigs;

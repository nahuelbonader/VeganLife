import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { createStore } from "../store/actions/stores";
import GooglePlacesInput from '../components/GooglePlacesInput';
import InputTime from "./InputHorario";
import styles from "../styles/createStore";
import colors from "../styles/colors";

export default ({ setMessage, restoreTab }) => {
  

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.usersReducer);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({lat: 0, lng: 0})
  const [phone, setPhone] = useState("");
  const [CUIL, setCuil] = useState("");
  const [description, setDescription] = useState("");
  const [delivery, setDelivery] = useState(false);

  const openHours = {
    open: false,
    startMorning: 0,
    endMorning: 0,
    startNoon: 0,
    endNoon: 0,
  };

  const [sunday, setSunday] = useState({ ...openHours });
  const [monday, setMonday] = useState({ ...openHours });
  const [tuesday, setTuesday] = useState({ ...openHours });
  const [wednesday, setWednesday] = useState({ ...openHours });
  const [thursday, setThursday] = useState({ ...openHours });
  const [friday, setFriday] = useState({ ...openHours });
  const [saturday, setSaturday] = useState({ ...openHours });

  const [firstPage, setFirstPage] = useState(true);
  const goNext = () => setFirstPage(!firstPage);

  const handleSubmit = () => {
    const open = [
      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
    ];
    dispatch(
      createStore({
        superAdmin: user._id,
        name,
        email,
        image,
        address,
        phone,
        CUIL,
        description,
        delivery,
        open,
        location
      })
    )


      .then((res) => {
        res instanceof Error
          ? setMessage("Lo sentimos, hubo un problema :(")
          : setMessage("Creado Satisfactoriamente :)");
      })
      .then(() => {
        goNext();
        restoreTab();
      });

    setTimeout(function () {
      setMessage("");
    }, 5000);
  };

  const handleAdress = (address, location) =>{
    setAddress(address)
    setLocation(location)
    console.log('ADDRESS', address, 'location', location)
  }

  return firstPage ? (
    <View style={styles.container}>
      <View style={styles.containerInputs}>
        <View style={styles.containerInputsShorts}>
          <TextInput
            style={styles.inputShort}
            placeholder="Nombre"
            onChangeText={setName}
            value={name}
          />
          <TextInput
            keyboardType="email-address"
            style={styles.inputShort}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <TextInput
          style={styles.inputLarge}
          placeholder="Imagen Url"
          onChangeText={setImage}
          value={image}
        /> 
       
        <GooglePlacesInput style={styles.inputLarge} handleAdress={handleAdress}/>
      

        <View style={styles.containerInputsShorts}>
          <TextInput
            keyboardType="number-pad"
            style={styles.inputShort}
            placeholder="Número de teléfono"
            onChangeText={setPhone}
            value={phone}
          />
          <TextInput
            keyboardType="number-pad"
            style={styles.inputShort}
            placeholder="CUIL"
            onChangeText={setCuil}
            value={CUIL}
          />
        </View>
        <TextInput
          style={styles.inputDescription}
          multiline
          placeholder="Descripción"
          onChangeText={setDescription}
          value={description}
          maxLength={100}
          numberOfLines={3}
        />
      </View>

      

      <View style={styles.separetorSpace}></View>

      <View style={styles.deliveryContainer}>
        <Text style={styles.questionText}>¿Hacen Delivery?</Text>
        <View style={styles.deliveryOptions}>
          <Text style={styles.optionText}>No</Text>
          <RadioButton
            status={!delivery ? "checked" : "unchecked"}
            onPress={() => setDelivery(false)}
            color={colors.carrot}
            uncheckedColor={colors.greenligth}
          />
          <Text style={styles.optionText}>Si</Text>
          <RadioButton
            status={delivery ? "checked" : "unchecked"}
            onPress={() => setDelivery(true)}
            color={colors.carrot}
            uncheckedColor={colors.greenligth}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.next} onPress={goNext}>
        <Text style={styles.textSubmit}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.goBack} onPress={goNext}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.titleText}>¿Qué días abren?</Text>
      </View>

      <ScrollView
        style={styles.containerInputsHours}
        showsVerticalScrollIndicator={false}
      >
        <InputTime dayName="Domingo" setDay={setSunday} />
        <InputTime dayName="Lunes" setDay={setMonday} />
        <InputTime dayName="Martes" setDay={setTuesday} />
        <InputTime dayName="Miércoles" setDay={setWednesday} />
        <InputTime dayName="Jueves" setDay={setThursday} />
        <InputTime dayName="Viernes" setDay={setFriday} />
        <InputTime dayName="Sábado" setDay={setSaturday} />

        <View style={styles.submitContainer}>
          <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
            <Text style={styles.textSubmit}>CREAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

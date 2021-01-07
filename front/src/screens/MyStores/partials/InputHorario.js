import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import colors from "../../../styles/colors";
import { RadioButton } from "react-native-paper";
import useInputs from "../../../hooks/useInputs";
import styles from "../styles/inputHorario";

const Time = ({ text, handleChange, time }) => (
  <TextInput
    keyboardType="number-pad"
    style={styles.input}
    autoCorrect={false}
    value={text ? text : null}
    onChangeText={handleChange}
    placeholder={time}
    maxLength={2}
  />
);

const Input = ({ dayName, setDay }) => {
  const [open, setOpen] = useState(false);
  const [inputs, handleChange] = useInputs();
  const {
    hoursOpenMorning,
    minutesOpenMorning,
    hoursCloseMorning,
    minutesCloseMorning,
    hoursOpenAftenoon,
    minutesOpenAfternoon,
    hoursCloseAftenoon,
    minutesCloseAfternoon,
  } = inputs;

  const changeToMinutes = (hours, minutes) => hours * 60 + minutes * 1;

  useEffect(() => {
    const startMorning = changeToMinutes(hoursOpenMorning, minutesOpenMorning);
    const endMorning = changeToMinutes(hoursCloseMorning, minutesCloseMorning);
    const startNoon = changeToMinutes(hoursOpenAftenoon, minutesOpenAfternoon);
    const endNoon = changeToMinutes(hoursCloseAftenoon, minutesCloseAfternoon);
    setDay({
      open,
      startMorning,
      endMorning,
      startNoon,
      endNoon,
    });
  }, [
    hoursOpenMorning,
    minutesOpenMorning,
    hoursCloseMorning,
    minutesCloseMorning,
    hoursOpenAftenoon,
    minutesOpenAfternoon,
    hoursCloseAftenoon,
    minutesCloseAfternoon,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dayName}</Text>

      <View style={styles.optionsContainer}>
        <Text style={styles.optionText}>No</Text>
        <RadioButton
          status={!open ? "checked" : "unchecked"}
          onPress={() => setOpen(false)}
          color={colors.carrot}
          uncheckedColor={colors.greenligth}
        />
        <Text style={styles.optionText}>Si</Text>
        <RadioButton
          status={open ? "checked" : "unchecked"}
          onPress={() => setOpen(true)}
          color={colors.carrot}
          uncheckedColor={colors.greenligth}
        />
      </View>

      {!open ? null : (
        <View style={styles.openContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.descriptionText}>Mañana</Text>
            <Text style={styles.descriptionText}>Tarde</Text>
          </View>

          <View style={styles.hoursContainer}>
            <Text style={styles.text}>Desde</Text>
            <View style={styles.timeContainer}>
              <Time
                text={hoursOpenMorning}
                handleChange={handleChange("hoursOpenMorning")}
                time={"hh"}
              />
              <Text style={styles.descriptionText}>:</Text>
              <Time
                text={minutesOpenMorning}
                handleChange={handleChange("minutesOpenMorning")}
                time={"mm"}
              />
            </View>
            <View style={styles.timeContainer}>
              <Time
                text={hoursOpenAftenoon}
                handleChange={handleChange("hoursOpenAftenoon")}
                time={"hh"}
              />
              <Text style={styles.descriptionText}>:</Text>
              <Time
                text={minutesOpenAfternoon}
                handleChange={handleChange("minutesOpenAfternoon")}
                time={"mm"}
              />
            </View>
          </View>

          <View style={styles.hoursContainer}>
            <Text style={styles.text}>Hasta</Text>
            <View style={styles.timeContainer}>
              <Time
                text={hoursCloseMorning}
                handleChange={handleChange("hoursCloseMorning")}
                time={"hh"}
              />
              <Text style={styles.descriptionText}>:</Text>
              <Time
                text={minutesCloseMorning}
                handleChange={handleChange("minutesCloseMorning")}
                time={"mm"}
              />
            </View>
            <View style={styles.timeContainer}>
              <Time
                text={hoursCloseAftenoon}
                handleChange={handleChange("hoursCloseAftenoon")}
                time={"hh"}
              />
              <Text style={styles.descriptionText}>:</Text>
              <Time
                text={minutesCloseAfternoon}
                handleChange={handleChange("minutesCloseAfternoon")}
                time={"mm"}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Input;

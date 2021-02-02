import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import colors from "../styles/colors";

const Tab = ({ tab, tabSelected, setTabSelected, light }) => (
  <TouchableOpacity onPress={() => setTabSelected(tab)}>
    <Text
      style={
        light
          ? tabSelected == tab
            ? styles.touchActiveLight
            : styles.touchInactiveLight
          : tabSelected == tab
          ? styles.touchActive
          : styles.touchInactive
      }
    >
      {tab}
    </Text>
  </TouchableOpacity>
);

export default ({ tabs, tabSelected, setTabSelected, light }) => (
  <View style={light ? styles.tabsContainerLight : styles.tabsContainer}>
    {tabs.map((tab) => (
      <Tab
        tab={tab}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
        key={tab}
        light={light}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  tabsContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.darkGreen,
  },
  touchActive: {
    color: colors.background,
    borderBottomWidth: 2,
    borderBottomColor: colors.background,
  },
  touchInactive: {
    color: "black",
    fontWeight: "bold",
    borderBottomWidth: 1,
  },

  // Light
  tabsContainerLight: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  touchActiveLight: {
    color: colors.dartmouthGreen,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: colors.dartmouthGreen,
  },
  touchInactiveLight: {
    color: colors.teaGreen,
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
});

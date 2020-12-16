import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../styles/tabs";

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

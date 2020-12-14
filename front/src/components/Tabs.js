import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../styles/tabs";

const Tab = ({ tab, tabSelected, setTabSelected }) => (
  <TouchableOpacity onPress={() => setTabSelected(tab)}>
    <Text
      style={tabSelected == tab ? styles.touchActive : styles.touchInactive}
    >
      {tab}
    </Text>
  </TouchableOpacity>
);

export default ({ tabs, tabSelected, setTabSelected }) => (
  <View style={styles.tabsContainer}>
    {tabs.map((tab) => (
      <Tab
        tab={tab}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
        key={tab}
      />
    ))}
  </View>
);

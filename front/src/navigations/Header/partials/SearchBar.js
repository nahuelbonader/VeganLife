import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPressed } from "../../../store/actions/search";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/searchBar";

const SearchBar = ({ search, setSearch }) => {
  const { pressed } = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {!pressed ? (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => dispatch(setPressed(true))}
        >
          <Ionicons
            style={styles.searchIcon}
            name="md-search"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      ) : (
        <>
          <TextInput
            autoFocus={true}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={search}
            onChangeText={setSearch}
            placeholder="Search"
          />
          <Ionicons
            style={styles.deleteIcon}
            name="ios-close"
            size={24}
            color="black"
            onPress={() => setSearch("")}
          />
        </>
      )}
    </View>
  );
};

export default SearchBar;

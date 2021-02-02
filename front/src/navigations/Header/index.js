import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { Appbar, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { userIcon, VLICon } from "../../utils/constants";
import useInputs from "../../hooks/useInputs";
import SearchBar from "./partials/SearchBar";
import styles from "./styles";

const Header = ({ previous }) => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.usersReducer.user);
  const currentRoute = useSelector((state) => state.bottomRouteReducer);
  const [{ search }, handleChange] = useInputs();
  const setSearch = handleChange("search");
  return (
    <Appbar.Header style={styles.back}>
      {previous ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Avatar.Image
            size={40}
            style={styles.userIcon}
            source={{ uri: user.image ? user.image : userIcon }}
          />
        </TouchableOpacity>
      )}
      <View style={styles.logoContiner}>
        {currentRoute.route == 3 ? (
          <SearchBar search={search} setSearch={setSearch} />
        ) : (
          <Image style={styles.logo} source={VLICon} />
        )}
      </View>
    </Appbar.Header>
  );
};

export default Header;

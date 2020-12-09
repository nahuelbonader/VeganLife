import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Portal, FAB, Provider } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import setRoute from "../store/actions/bottomRoutes";
import AddRecipeScreen from "./AddRecipeScreen";
import FeedRecetas from "./FeedRecetaScreen";
import Search from "./SearchScreen";

const Tab = createMaterialBottomTabNavigator();

const Map = () => <Text>Map</Text>;
const PostRecipe = () => <Text>PostRecipe</Text>;

const BottomNav = ({ navigation }) => {
  const dispatch = useDispatch();
  const { index, routes } = navigation.dangerouslyGetState();
  const currentRoute = routes[index].state ? routes[index].state.index : 0;

  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  React.useEffect(() => {
    dispatch(setRoute(currentRoute));
  }, [currentRoute]);

  return (
    <React.Fragment>
      <Provider>
        <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#fdfffc"
          barStyle={styles.back}
        >
          <Tab.Screen
            name="Feed"
            component={FeedRecetas}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Post"
            component={AddRecipeScreen}
            options={{
              tabBarLabel: "Post",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="feather"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              tabBarLabel: "Map",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="map-marker-radius"
                  color={color}
                  size={26}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: "Search",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="search" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>

        <Portal>
          <FAB.Group
            style={{
              position: "absolute",
              bottom: "8%",
              right: "0%",
            }}
            fabStyle={styles.backTwo}
            open={open}
            icon={open ? "calendar-today" : "plus"}
            actions={[
              {
                icon: "help-circle",
                label: "¿Qué cocino hoy?",
                onPress: () => navigation.navigate("CookToday"),
              },
              {
                icon: "cookie",
                label: "Vegan Cook",
                onPress: () => console.log("Pressed star"),
              },
              {
                icon: "store",
                label: "Vegan Market",
                onPress: () => navigation.navigate("StoreFeed"),
              },
              {
                icon: "cart",
                label: "Cart",
                onPress: () => console.log("Pressed notifications"),
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  back: {
    backgroundColor: "#006028",
  },
  backTwo: {
    backgroundColor: "#008538",
  },
});

export default BottomNav;

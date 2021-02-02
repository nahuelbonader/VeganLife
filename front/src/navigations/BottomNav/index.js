import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Portal, FAB, Provider } from "react-native-paper";
import { useDispatch } from "react-redux";
import setRoute from "../../store/actions/bottomRoutes";
import AddRecipe from "../../screens/AddRecipe";
import FeedRecetas from "../../screens/FeedRecipes";
import FeedMarket from "../../screens/FeedStores";
import Search from "../../screens/Search";
import Map from "../../screens/Map";
import styles from "./styles";

const Tab = createMaterialBottomTabNavigator();

const BottomNav = ({ navigation }) => {
  const dispatch = useDispatch();
  const { index, routes } = navigation.dangerouslyGetState();
  const currentRoute = routes[index].state ? routes[index].state.index : 0;
  const [homeRecipe, setHomeRecipe] = React.useState(true);
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
            component={homeRecipe ? FeedRecetas : FeedMarket}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Post"
            component={AddRecipe}
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
            onPress={() => navigation.navigate("Map")}
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
                icon: homeRecipe ? "store" : "cookie",
                label: homeRecipe ? "Vegan Market" : "Vegan Cook",
                onPress: () => setHomeRecipe(!homeRecipe),
              },
              // {
              //   icon: "cart",
              //   label: "Cart",
              //   onPress: () => console.log("Pressed notifications"),
              // },
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

export default BottomNav;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddRecipe from "../screens/AddRecipe";
import BottomNav from "./BottomNav";
import CookToday from "../screens/CookToday";
import Header from "./Header";
import Map from "../screens/Map";
import MyStores from "../screens/MyStores";
import Profile from "../screens/UserProfile";
import Recipe from "../screens/SingleRecipe";
import SingleCategory from "../screens/SingleCategory";
import SingleMarket from "../screens/SingleMarket";
import SingleProduct from "../screens/SingleProduct";
import StoreFeed from "../screens/FeedStores";
import StorePanel from "../screens/StorePanel";
import SuperAdminStore from "../screens/SuperAdminStore/index";

import Splash from "../commons/Splash";

const Stack = createStackNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      {/* <Stack.Screen name="AddRecipe" component={AddRecipe} /> */}
      <Stack.Screen name="Bottom" component={BottomNav} />
      <Stack.Screen name="Recipe" component={Recipe} />
      <Stack.Screen name="SingleCategory" component={SingleCategory} />
      <Stack.Screen name="CookToday" component={CookToday} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="StoreFeed" component={StoreFeed} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="MyCommerces" component={MyStores} />
      <Stack.Screen name="CommercePanel" component={StorePanel} />
      <Stack.Screen name="SingleProduct" component={SingleProduct} />
      <Stack.Screen name="SuperAdminCommerce" component={SuperAdminStore} />
      <Stack.Screen name="SingleMarket" component={SingleMarket} />
    </Stack.Navigator>
  );
};

export default FeedStack;

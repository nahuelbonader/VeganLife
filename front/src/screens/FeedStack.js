import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Recipe from "./SingleRecipeScreen";
import SingleCategory from "./SingleCategoryScreen";
import Header from "./Header";
import BottomNav from "./BottomNav";
import CookToday from "./CookTodayScreen";
import Profile from "./ProfileScreen";
import StoreFeed from "./FeedStoresScreen";
import Map from "../components/Map";
import Splash from "../components/Splash";
import MyStores from "./MyCommercesScreen";
import CommercePanel from "./CommercePanelScreen";
import SingleProduct from "./SingleProductScreen";

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
      <Stack.Screen name="Bottom" component={BottomNav} />
      <Stack.Screen name="Recipe" component={Recipe} />
      <Stack.Screen name="SingleCategory" component={SingleCategory} />
      <Stack.Screen name="CookToday" component={CookToday} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="StoreFeed" component={StoreFeed} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="MyCommerces" component={MyStores} />
      <Stack.Screen name="CommercePanel" component={CommercePanel} />
      <Stack.Screen name="SingleProduct" component={SingleProduct} />
    </Stack.Navigator>
  );
};

export default FeedStack;

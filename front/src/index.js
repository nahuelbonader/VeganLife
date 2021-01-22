import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import store from "./store";
import DrawerContent from "./navigations/Drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FeedStack from "./navigations/FeedStack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import Splash from "./commons/Splash";
import VerifyAccount from "./screens/VerifyAccount";

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            {/* <Drawer.Screen name="Splash" component={Splash} /> */}
            <Drawer.Screen name='Home' component={FeedStack} />
            <Drawer.Screen name='Login' component={Login} />
            <Drawer.Screen name='Register' component={Register} />
            <Drawer.Screen name='VerifyAccount' component={VerifyAccount} />
            <Drawer.Screen name='ForgotPassword' component={ForgotPassword} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
};

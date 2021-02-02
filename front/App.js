// import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import store from "./src/store";
import DrawerContent from "./src/navigations/Drawer";
import FeedStack from "./src/navigations/FeedStack";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import ForgotPassword from "./src/screens/ForgotPassword";
import Splash from "./src/commons/Splash";

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            {/* <Drawer.Screen name="Splash" component={Splash} /> */}
            <Drawer.Screen name="Home" component={FeedStack} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
};

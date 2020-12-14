import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import store from "./src/store/store";
import DrawerContent from "./src/screens/Drawer";
import FeedStack from "./src/screens/FeedStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./src/screens/LoginScreen";
import Register from "./src/screens/RegisterScreen";
import ForgotPassword from './src/components/ForgotPassword'
import AddRecipeScreen from "./src/screens/AddRecipeScreen";
import Splash from './src/components/Splash'

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
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

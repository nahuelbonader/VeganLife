import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { createStackNavigator } from "@react-navigation/stack";

import DrawerContent from "./src/screens/Drawer";
import Header from "./src/screens/Header";
import FeedStack from "./src/screens/FeedStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./src/screens/LoginScreen";
import Register from "./src/screens/RegisterScreen";

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="Home" component={FeedStack} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
};

/*
<Stack.Navigator  headerMode= "screen" screenOptions={{
       header:({ scene, previous, navigation}) => (
         <Header scene={scene} previous={previous} navigation={navigation} />
       )
     }}>
  <Stack.Screen name="Drawer" component={Drawer} options={{ headerTitle: 'Home' }} />
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Register" component={Register} />
  <Stack.Screen name="SingleCategory" component={SingleCategory} />
  <Stack.Screen name="Recipe" component={Recipe} />
</Stack.Navigator>
*/

import 'react-native-gesture-handler';
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import store from './src/store'
import { createStackNavigator } from '@react-navigation/stack';
import FeedRecetas from './src/screens/FeedRecetaScreen'
import Login from './src/screens/LoginScreen'
import Register from './src/screens/RegisterScreen'
//import Prueba from './src/screens/PruebaScreen'
import Recipe from "./src/screens/SingleRecipe";

const Stack = createStackNavigator();

export default () => {
  return(
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="FeedRecetas" component={FeedRecetas} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Register" component={Register} />
        
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

/*const navigator = createStackNavigator(

  {
    FeedRecetas,
    Login,
    Register,
    Prueba,
    Recipe: Recipe
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);*/

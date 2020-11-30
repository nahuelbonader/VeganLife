import 'react-native-gesture-handler';
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import store from './src/store'
import { createStackNavigator } from '@react-navigation/stack';
import FeedRecetas from './src/screens/FeedRecetaScreen'
import Login from './src/screens/LoginScreen'
import Register from './src/screens/RegisterScreen'
import Recipe from "./src/screens/SingleRecipeScreen";
import SingleCategory from './src/screens/SingleCategoryScreen'
import Profile from './src/screens/ProfileScreen'

const Stack = createStackNavigator();

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="FeedRecetas" component={FeedRecetas} />
          <Stack.Screen name="SingleCategory" component={SingleCategory} />
          <Stack.Screen name="Recipe" component={Recipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



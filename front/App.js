import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Login from '../front/src/screens/Login'
import Register from '../front/src/screens/Register'
import Prueba from '../front/src/screens/Prueba'


const navigator = createStackNavigator(

  {
    Login,
    Register,
    Prueba
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);

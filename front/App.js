import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Login from '../front/src/components/Login'
import Register from '../front/src/components/Register'


const navigator = createStackNavigator(

  {
    Login,
    Register
  },
  {
    initialRouteName: "Register",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);

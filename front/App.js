import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FeedRecetas from './src/screens/FeedRecetaScreen'
import Login from './src/screens/LoginScreen'
import Register from './src/screens/RegisterScreen'
import Prueba from './src/screens/PruebaScreen'


const navigator = createStackNavigator(

  {
    FeedRecetas: FeedRecetas,
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

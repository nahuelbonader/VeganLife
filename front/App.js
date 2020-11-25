import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import FeedRecetaContainer from './src/containers/FeedRecetaContainer'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Feed: FeedRecetaContainer,
  },
  {
    initialRouteName: "Feed",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);

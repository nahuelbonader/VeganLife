import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FeedRecetas from "./src/screens/FeedRecetaScreen";
import Login from "./src/screens/LoginScreen";
import Register from "./src/screens/RegisterScreen";
import Recipe from "./src/screens/SingleRecipeScreen";

const navigator = createStackNavigator(
  {
    FeedRecetas,
    Login,
    Register,
    Recipe,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

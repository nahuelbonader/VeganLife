import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Recipe from "./src/screens/SingleRecipe";

const navigator = createStackNavigator(
  {
    Recipe: Recipe
  },
  {
    initialRouteName: "Recipe",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);

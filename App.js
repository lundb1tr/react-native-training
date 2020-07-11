import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/screens/HomeScreen";
import Components from "./src/screens/ComponentsScreen";
import List from "./src/screens/ListScreen";
import Image from "./src/screens/ImageScreen";
import Counter from "./src/screens/CounterScreen";

const navigator = createStackNavigator(
  {
    Home,
    Components,
    List,
    Image,
    Counter,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

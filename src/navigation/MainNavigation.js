import * as React from "react";
import { NavigationContainer, D } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IndexScreen from "../screens/IndexScreen";

const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "white",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
  },
};

function MainNavigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="SearchScreen">
        <Stack.Screen name="Index" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;

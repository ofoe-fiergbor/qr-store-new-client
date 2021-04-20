import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// RELATIVE IMPORTS
import Home from "./../views/screen/Home/Home";
import Auth from "./../views/screen/Auth/Auth";

const Stack = createStackNavigator();
const noHeader = {headerShown:false}

const StackNavigation = () => {
  return (
      <Stack.Navigator screenOptions={noHeader}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  );
};

export default StackNavigation;

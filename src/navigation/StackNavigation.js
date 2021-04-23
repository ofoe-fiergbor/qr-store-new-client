import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// RELATIVE IMPORTS
import Home from "./../views/screen/Home/Home";
import Auth from "./../views/screen/Auth/Auth";
import Menu from './../views/screen/Menu/Menu';
import Scanner from './../views/screen/Scanner/Scanner';
import Profile from './../views/screen/Profile/Profile';

const Stack = createStackNavigator();
const noHeader = {headerShown:false}

const StackNavigation = () => {
  return (
      <Stack.Navigator screenOptions={noHeader}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
  );
};

export default StackNavigation;

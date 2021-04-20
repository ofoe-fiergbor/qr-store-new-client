import React from "react";
import "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import StackNavigation from "./StackNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

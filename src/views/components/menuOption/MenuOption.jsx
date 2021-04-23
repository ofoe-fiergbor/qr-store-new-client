import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Subheading } from "react-native-paper";

const MenuOption = ({ icon, text, iconSyle, color }) => {
  return (
    <View style={styles.container}>
      <Avatar.Icon
        size={45}
        color={color}
        style={[styles.icon, iconSyle]}
        icon={icon}
      />
      <View style={styles.right}>
        <Subheading style={styles.mainText}>{text}</Subheading>

        <TouchableOpacity style={styles.button}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuOption;

import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { Text } from "react-native-paper";
import MenuOption from "../menuOption/MenuOption";
import colors from "../../../constants/colors";

const MenuOptions = () => {
  return (
    <View style={styles.container}>
      <MenuOption
        icon="store"
        text="Your Items"
        color={colors.primary}
        iconSyle={styles.menuIcon}
      />
      <MenuOption
        icon="account"
        text="Profile Edit"
        color={colors.secondary}
        iconSyle={styles.profileIcon}
      />
      <MenuOption
        icon="account"
        text="Settings"
        color="#33691e"
        iconSyle={styles.settingIcon}
      />
    </View>
  );
};

export default MenuOptions;

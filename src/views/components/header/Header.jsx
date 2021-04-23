import React from "react";
import { Avatar } from "react-native-paper";
import { View, TouchableOpacity } from "react-native";

//RELATIVE IMPORT
import styles from "./styles";

const Header = ({ image = false, navigation }) => {
  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      {/* SHOW PROFILE IMAGE WHEN IMAGE IS AVAILABLE OR SHOW INITIALS AS DP */}
      {image ? (
        //NAVIGATION LINK TO PROFILE PAGE
        <TouchableOpacity onPress={navigateToProfile}>
          <Avatar.Image
            style={styles.icon}
            size={50}
            source={require("../../../../assets/png/profile-placeholder.png")}
          />
        </TouchableOpacity>
      ) : (
        //NAVIGATION LINK TO PROFILE PAGE
        <TouchableOpacity onPress={navigateToProfile}>
          <Avatar.Text style={styles.icon} size={50} label="XD" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

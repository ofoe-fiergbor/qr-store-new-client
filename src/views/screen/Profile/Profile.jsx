import React from "react";
import styles from "./styles";
import { View } from "react-native";
import { Text } from "react-native-paper";
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import MenuOptions from "./../../components/menuOptions/MenuOptions";
import LogoutButton from "../../components/logoutButton/LogoutButton";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <MenuOptions />
      <LogoutButton />
    </View>
  );
};

export default Profile;

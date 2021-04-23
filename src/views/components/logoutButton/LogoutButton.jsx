import React from "react";
import { Button } from "react-native-paper";
import styles from "./styles";

const LogoutButton = () => {
  return (
    <Button
      icon="logout"
      mode="contained"
      style={styles.container}
      onPress={() => console.log("Pressed")}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;

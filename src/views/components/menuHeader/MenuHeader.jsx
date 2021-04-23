import React from "react";
import styles from "./styles";
import { View, Image, Linking } from "react-native";
import { Text, Button } from "react-native-paper";
import { makeCall } from "../../../utils/formatData";

const MenuHeader = () => {
  const phoneNumber = "0547458617";

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/jpg/pexels-mohamed-abdelghaffar-771742.jpg")}
        style={styles.image}
      />
      <Button
        icon="phone"
        mode="contained"
        onPress={() => makeCall(phoneNumber)}
        style={styles.phoneNumber}
      >
        {phoneNumber}
      </Button>
      <Text style={styles.address}>North Kaneshie, Accra-North</Text>
    </View>
  );
};

export default MenuHeader;

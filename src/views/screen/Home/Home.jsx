import React from "react";
import { View } from "react-native";
import { Title, Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//RELATIVE IMPORTS
import styles from "./styles";
import Header from "../../components/header/Header";
import LargeText from "./../../components/largeText/LargeText";

const Home = ({ navigation }) => {
  return (
    <View>
      {/* PAGE HEADER */}
      <Header navigation={navigation} />

      <View style={styles.container}>
        <Title style={styles.welcome}>Welcome</Title>
        <Title style={styles.name}>Xavier Dlake</Title>
      </View>

      {/* MAIN PAGE COMPONENTS */}
      <View style={styles.innerContainer}>
        <MaterialCommunityIcons
          name="qrcode-scan"
          size={150}
          color={styles.iconColor.color}
        />
        <Title style={styles.text}>Scan a merchant QR</Title>

        <Button
          icon="qrcode-scan"
          mode="contained"
          onPress={() => navigation.navigate("Scanner")}
        >
          scan qr
        </Button>
      </View>
    </View>
  );
};

export default Home;

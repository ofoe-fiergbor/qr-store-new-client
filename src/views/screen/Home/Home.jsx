import React from "react";
import { View } from "react-native";
import { Title, Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//RELATIVE IMPORTS
import styles from "./styles";
import Header from "../../components/header/Header";

const Home = ({ navigation }) => {
  return (
    <View>
      {/* PAGE HEADER */}
      <Header />

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
          onPress={() => alert('qr camera')}
        >
          scan qr
        </Button>
      </View>
    </View>
  );
};

export default Home;

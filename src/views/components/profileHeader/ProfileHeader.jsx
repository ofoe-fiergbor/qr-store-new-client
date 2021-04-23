import React from "react";
import { View, Image } from "react-native";
import styles from "./style";
import { Text } from "react-native-paper";

const ProfileHeader = () => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={require("../../../../assets/jpg/pexels-mohamed-abdelghaffar-771742.jpg")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.joinedText}>Joined</Text>
          <Text style={styles.timeText}>6 months ago</Text>
        </View>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.firstName}>Xavier</Text>
        <Text style={styles.lastName}>Dlake</Text>
      </View>
    </React.Fragment>
  );
};

export default ProfileHeader;

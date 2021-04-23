import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Title, Avatar } from "react-native-paper";

import styles from "./styles";

const AuthHeader = ({ localStage, onBackPress, migrate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TouchableWithoutFeedback onPress={()=> onBackPress()}>
          <View
            style={[
              styles.singleTextContainer,
              localStage === 0 && styles.singleTextContainerBorderBottom,
            ]}
          >
            <Title>Login</Title>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=> migrate(1)}>
          <View
            style={[
              styles.singleTextContainer,
              localStage === 1 && styles.singleTextContainerBorderBottom,
            ]}
          >
            <Title>Sign Up</Title>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Avatar.Icon size={50} icon="store" />
    </View>
  );
};

export default AuthHeader;

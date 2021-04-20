import React from "react";
import { View } from "react-native";
import {Text} from 'react-native-paper'

import styles from './styles'

const LargeText = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default LargeText;

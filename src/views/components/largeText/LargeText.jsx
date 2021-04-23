import React from "react";
import { View } from "react-native";
import {Text} from 'react-native-paper'

import styles from './styles'

const LargeText = ({text, textStyle}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};

export default LargeText;

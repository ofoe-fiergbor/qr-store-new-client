import React from "react";
import { View, ScrollView } from "react-native";

import styles from "./styles";
import Login from "../../components/login/Login";
import Register from "./../../components/register/Register";
import AuthHeader from "../../components/authHeader/AuthHeader";
import useMigration from './../../../hooks/useMigration';

const Auth = ({ navigation }) => {
  [swap, onBackPress, stages, localStage] = useMigration()
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
      <AuthHeader migrate={swap} onBackPress={onBackPress} localStage={localStage}/>
      {stages[localStage] === "LOGIN" && <Login />}
      {stages[localStage] === "REGISTER" && <Register onBackPress={onBackPress}/>}
    </View>
    </ScrollView >
  );
};

export default Auth;

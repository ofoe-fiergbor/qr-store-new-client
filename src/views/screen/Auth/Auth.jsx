import React from "react";
import { View, ScrollView } from "react-native";

import styles from "./styles";
import Login from "../../components/login/Login";
import Register from "./../../components/register/Register";
import AuthHeader from "../../components/authHeader/AuthHeader";
import useMigration from './../../../hooks/useMigration';

const Auth = ({ navigation }) => {

  //CUSTOM HOOK FOR NAVIGATION BETWEEN LOGIN & REGISTER SHEETS
  [swap, onBackPress, stages, localStage] = useMigration()
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.container}>
      <AuthHeader migrate={swap} onBackPress={onBackPress} localStage={localStage}/>
      {stages[localStage] === "LOGIN" && <Login navigation={navigation}/>}
      {stages[localStage] === "REGISTER" && <Register navigation={navigation} onBackPress={onBackPress}/>}
    </View>
    </ScrollView >
  );
};

export default Auth;

import React from "react";
import { View } from "react-native";
import { TextInput, Title } from "react-native-paper";

import styles from "./styes";
import LargeText from "../largeText/LargeText";
import AuthButton from "../authButton/AuthButton";

const Login = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  const submit = () => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <LargeText text="Welcome Back" />

      <View style={styles.form}>
        <View style={styles.formInputContainer}>
          <TextInput
            label="Email"
            value={values.email}
            style={styles.formInput}
            keyboardType="email-address"
            onChangeText={(text) => onChange("email", text)}
          />
        </View>

        <View style={styles.formInputContainer}>
          <TextInput
            label="Password"
            value={values.password}
            style={styles.formInput}
            secureTextEntry={true}
            onChangeText={(text) => onChange("password", text)}
          />
        </View>
      </View>

      <View style={styles.footerContainer}>
        <Title style={styles.footerText}>Forgot password?</Title>
        <AuthButton onPress={submit} />
      </View>
    </View>
  );
};

export default Login;

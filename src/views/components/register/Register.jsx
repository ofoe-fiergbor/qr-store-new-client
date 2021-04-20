import React from "react";
import { View } from "react-native";
import LargeText from "../largeText/LargeText";
import { TextInput, Title } from "react-native-paper";

import styles from "./styles";
import AuthButton from "../authButton/AuthButton";

const Register = ({ onBackPress }) => {
  const [values, setValues] = React.useState({
    email: "",
    phone: "",
    fullName: "",
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
      <LargeText text="Create Account" />

      <View style={styles.form}>
        <View style={styles.formInputContainer}>
          <TextInput
            label="Full Name"
            value={values.fullName}
            style={styles.formInput}
            onChangeText={(text) => onChange("fullName", text)}
          />
        </View>

        <View style={styles.formInputContainer}>
          <TextInput
            label="Phone Number"
            value={values.phone}
            style={styles.formInput}
            keyboardType="phone-pad"
            onChangeText={(text) => onChange("phoneNumber", text)}
          />
        </View>

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
        <Title style={styles.footerText} onPress={() => onBackPress()}>
          Already have an account?
        </Title>
        <AuthButton onPress={submit} />
      </View>
    </View>
  );
};

export default Register;

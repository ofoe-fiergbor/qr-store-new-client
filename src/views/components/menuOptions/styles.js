import { StyleSheet, Dimensions } from "react-native";
import colors from "./../../../constants/colors";
import dimensions from "./../../../constants/dimensions";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    width: dimensions.matchParent,
    marginVertical: dimensions.margin.lg,
  },
  profileIcon: {
    backgroundColor: "#bbdefb",
  },
  menuIcon: { backgroundColor: "#ff9e80" },
  settingIcon: { backgroundColor: "#c5e1a5" },
});

export default styles;

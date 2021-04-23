import { StyleSheet, Dimensions } from "react-native";
import colors from "./../../../constants/colors";
import dimensions from "./../../../constants/dimensions";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    width: 150,
    borderRadius: dimensions.radius.sm,
    marginVertical: dimensions.margin.md,
  },
});

export default styles;

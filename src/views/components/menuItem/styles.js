import { StyleSheet, Dimensions } from "react-native";
import colors from "./../../../constants/colors";
import dimensions from "./../../../constants/dimensions";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    width: width / 2.7,
    marginHorizontal: dimensions.margin.md + 2,
    marginVertical: dimensions.margin.md + 2,
    height: 180,
  },
  image: {
    width: "100%",
    height: 130,
  },
});

export default styles;

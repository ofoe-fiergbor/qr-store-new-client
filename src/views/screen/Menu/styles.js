import { StyleSheet, Dimensions } from "react-native";
import colors from "./../../../constants/colors";
import dimensions from "./../../../constants/dimensions";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: "center",
    alignItems: "center",
  },

  flatlistContainer: {
    width: width,
  },
  contentContainerStyle: {
    width: width,
    marginTop: dimensions.margin.md,
  },
  button: {
    height: 50,
    width: width / 2,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: dimensions.margin.md,
  },
});

export default styles;

import { StyleSheet, Dimensions } from "react-native";
import colors from "./../../../constants/colors";
import dimensions from "./../../../constants/dimensions";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    marginVertical: dimensions.margin.sm,
  },
  right: {
    flexDirection: "row",
    height: "100%",
    justifyContent: "space-between",
    // backgroundColor:'red',
    width: "80%",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.grey,
    width: 55,
    height: "90%",
    borderRadius: dimensions.radius.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: { fontWeight: "bold", opacity: 0.7 },
});

export default styles;

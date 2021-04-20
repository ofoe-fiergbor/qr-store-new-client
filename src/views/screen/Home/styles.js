import { StyleSheet } from "react-native";
import colors from "./../../../constants/colors";
import dimensions from "./../../../constants/dimensions";

const styles = StyleSheet.create({
  container: {},
  innerContainer: {
    //   backgroundColor:'red',
    alignItems: "center",
    justifyContent: "center",
    height: dimensions.matchParent,
    width: dimensions.matchParent,
    paddingBottom:dimensions.padding.xxl
  },
  iconColor: {
    color: colors.grey,
  },
  text: {
    textAlign: "center",
    marginVertical: dimensions.margin.xxl,
  },
});

export default styles;

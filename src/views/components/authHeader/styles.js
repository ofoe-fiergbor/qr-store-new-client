import { StyleSheet } from "react-native";
import colors from "./../../../constants/colors";
import dimensions from "./../../../constants/dimensions";

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    // paddingBottom: dimensions.padding.xs,
  },
  textContainer: {
    flexDirection: "row",
    width: dimensions.halfParent,
    justifyContent: "space-between",
  },
  singleTextContainer: {
    paddingBottom: dimensions.padding.xs,
  },
  singleTextContainerBorderBottom: {
    borderBottomColor: colors.primary,
    borderBottomWidth: dimensions.border.sm,
  },
});

export default styles;

import { StyleSheet, Dimensions } from "react-native";
import colors from "./../../../constants/colors";
import dimensions from "./../../../constants/dimensions";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    height: 110,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: dimensions.radius.xl,
  },
  textContainer: {
    justifyContent: "center",
    width: dimensions.fortyPercentParent,
    paddingLeft: dimensions.padding.md,
    height: "90%",
    alignSelf: "center",
    borderLeftColor: colors.grey,
    borderLeftWidth: dimensions.border.sm,
  },
  joinedText: {
    fontWeight: "bold",
    fontSize: 15,
    opacity: 0.5,
  },
  timeText: {
    fontSize: dimensions.font.sm,
    fontWeight: "bold",
  },
  nameContainer: {},
  firstName: {
    fontSize: dimensions.font.xl,
    fontWeight: "bold",
  },
  lastName: {
    fontSize: dimensions.font.lg,
    opacity: 0.6
  },
});

export default styles;

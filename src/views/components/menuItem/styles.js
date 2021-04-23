import { StyleSheet, Dimensions } from "react-native";
import colors from "./../../../constants/colors";
import dimensions from "./../../../constants/dimensions";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    ...dimensions.shadow
  },
  itemContainer: {
    height: 200,
    width: width / 2,
    marginBottom: dimensions.margin.md,
    paddingHorizontal: dimensions.padding.md,
  },
  image: {
    height: 140,
  },
  cardContent: {
    height: 50,
  },
  selectedFilter:{
    backgroundColor: colors.secondaryLight,
    // height: 50,
  }
});

export default styles;

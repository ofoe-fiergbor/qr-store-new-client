import { StyleSheet } from "react-native";
import colors from "./../../../constants/colors";
import dimensions from "./../../../constants/dimensions";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.padding.xl,
    // backgroundColor:'orange
    marginTop: dimensions.margin.md
  },
  innerContainer: {
    //   backgroundColor:'red',
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    width: 400,
    alignSelf:'center',
    // paddingBottom:dimensions.padding.xxl
  },
  iconColor: {
    color: colors.grey,
  },
  text: {
    textAlign: "center",
    marginVertical: dimensions.margin.xxl,
  },
  welcome:{
    fontWeight: 'bold',
    opacity: 0.7,
    fontSize: dimensions.font.lg
  },
  name:{
    fontSize: dimensions.font.xl,
    paddingVertical: dimensions.padding.md
  }
});

export default styles;

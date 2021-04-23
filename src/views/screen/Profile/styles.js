import { StyleSheet, Dimensions } from "react-native";
import colors from "./../../../constants/colors";
import dimensions from "./../../../constants/dimensions";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
   paddingHorizontal: dimensions.padding.xl,
   paddingTop: dimensions.padding.xxl + 20
},



  
});

export default styles;

import { StyleSheet } from "react-native";
import colors from "./../../../constants/colors";
import dimensions from "./../../../constants/dimensions";

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: dimensions.font.md + 2,
    marginBottom: dimensions.margin.lg,
    marginTop: 0
  },
  container:{
    //   backgroundColor:'orange',
      width: dimensions.matchParent,
      height: 200,
      justifyContent:'center',
      alignItems:'center',
      
     
  },
  image:{
      width: dimensions.image.lg,
      height: dimensions.image.lg,
      borderRadius: dimensions.radius.xl
  },
  phoneNumber:{
      marginVertical: 5
    //   opacity: 0.8
  },
  address:{
      opacity: 0.8
  }
});

export default styles;

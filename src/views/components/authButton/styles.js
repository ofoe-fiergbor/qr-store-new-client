import { StyleSheet } from 'react-native';
import colors from './../../../constants/colors';
import dimensions from './../../../constants/dimensions';

const styles = StyleSheet.create({
    button:{
        alignItems:"center",
        justifyContent:'center',
        width: dimensions.margin.xxl,
        height: dimensions.margin.xxl,
        borderRadius: dimensions.radius.sm
    }
})


export default styles
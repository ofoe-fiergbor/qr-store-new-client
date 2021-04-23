import { StyleSheet } from 'react-native';
import colors from './../../../constants/colors';
import dimensions from './../../../constants/dimensions';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    formInputContainer:{
        marginVertical: dimensions.margin.md
    },
    form:{
        marginTop: dimensions.margin.xl,
        marginBottom: dimensions.margin.xxl
    },
    formInput:{
        height: dimensions.inputHeight
    },
    footerContainer:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent: 'space-between',
    },
    footerText:{
        fontSize: dimensions.font.md-3
    },
 
})


export default styles
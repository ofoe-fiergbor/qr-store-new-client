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
        borderTopEndRadius: dimensions.radius.sm,
        borderTopLeftRadius: dimensions.radius.sm
    },
    footerContainer:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent: 'space-between',
    },
    footerText:{
        fontSize: dimensions.font.md-2
    }
})


export default styles
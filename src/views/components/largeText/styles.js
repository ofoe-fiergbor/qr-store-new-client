import { StyleSheet } from 'react-native';
import colors from './../../../constants/colors';
import dimensions from './../../../constants/dimensions';

const styles = StyleSheet.create({
    container:{
        width: dimensions.matchParent,
        marginTop: dimensions.margin.xxl
    },
    text:{
        fontSize: dimensions.font.xl-2
    }
})


export default styles
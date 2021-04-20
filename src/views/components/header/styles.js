import { StyleSheet } from 'react-native';
import colors from './../../../constants/colors';
import dimensions from './../../../constants/dimensions';

const styles = StyleSheet.create({
    container:{
        width: dimensions.matchParent,
        height: 80,
        justifyContent:'flex-end',
        paddingHorizontal: dimensions.padding.lg
    },
    icon:{
        alignSelf:'flex-end',
    }
    

})
export default styles
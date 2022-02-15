import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

export const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: color.color_lightblue},
    scrollview: {flexGrow: 1},
    imageview:{alignSelf:'center'},
    subview: {
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: color.color_white,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:20
      },
      verticleLine:{
        height:20,
        width: 1,
        backgroundColor:color.color_black,
        alignSelf:'center',
        marginLeft:10,
        
      },
});

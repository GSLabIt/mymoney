import {StyleSheet} from 'react-native';
import {font} from '../../common/Font';
import {color} from '../../common/color';

export const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: color.color_lightblue},
    scrollview: {flexGrow: 1},
    subview: {
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: color.color_white,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:20
      },
      touchview:{
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',
        backgroundColor: color.color_lightblue,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 20,
      },
      touchText:{
        fontSize: 19,
        fontWeight: '600',
        color: color.color_lightblack,
        fontFamily: font.nunitoregular,
      },
});

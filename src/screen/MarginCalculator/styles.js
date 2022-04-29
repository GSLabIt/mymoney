import { StyleSheet } from 'react-native';
import { font } from '../../common/Font';
import { color } from '../../common/color';

export const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: color.color_lightblue
    },
    mainscroll:
    {
        backgroundColor: color.color_white,
        marginTop: -25,
    },
    seperatorLine: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderWidth: 0.2,
        backgroundColor: color.color_bankhorizontal,
        opacity:0.5
    },
    withouttextinput: {
        marginHorizontal: 20
    },
    buttonmain: {
        flexDirection: 'row',
     
        paddingBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: color.color_white
    },
    buytext: {
        borderRadius: 100,
        borderColor: color.color_darkblue,
        backgroundColor: color.color_white,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1,
        borderWidth: 1,
        marginRight: 20,

    },
    selltext: {
        borderRadius: 100,
        backgroundColor: color.color_darkblue,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1,
        shadowColor: color.color_showblue,
        shadowOpacity: 1,
        shadowRadius: 8,

        elevation: 5,
    },
    sametext: {
        color: color.color_white,
        fontFamily: font.nunitobold,
        fontSize: 19,
        textAlign: 'center',
    },

    onetext: {
        color: color.color_darkblue,
        fontFamily: font.nunitobold,
        fontSize: 19,
        textAlign: 'center',
    },
    backgroundview: {
        backgroundColor: color.color_lightblue,
        borderRadius: 12,
        marginTop: 15,
        paddingHorizontal: 10,
        
        marginHorizontal:20
    }
});


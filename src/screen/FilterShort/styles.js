import { StyleSheet } from 'react-native';
import { font } from '../../common/Font';
import { color } from '../../common/color';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: color.color_lightblue,
        flex: 1
    },
    mainview: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: color.color_white,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: -20
    },
    touchableview: {
        backgroundColor: color.color_lightblue,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 2
    },
    buttonmain: {
        flexDirection: 'row',
        paddingTop: 20,
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

    sideview: {
        borderWidth: 1,
        marginTop: 10,
        marginHorizontal: 5,
        borderColor: color.color_filtegray,
        borderRadius: 8,
        width: "60%"
    },
    
});

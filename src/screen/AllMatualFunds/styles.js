import { StyleSheet } from 'react-native';
import { font } from '../../common/Font';
import { color } from '../../common/color';

export const styles = StyleSheet.create({
    container: { backgroundColor: color.color_lightblue, flex: 1 },
    whiteview: {
        backgroundColor: color.color_white,
        paddingHorizontal: 15, flex: 1,
        paddingBottom: 10
    },
    mainview: {
        justifyContent: "space-between",
        flexDirection: 'row',
        backgroundColor: color.color_white,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginTop: -20
    },
    filterview: {
        flexDirection: "row",
        alignSelf: "center"
    },
    shorttext: {
        fontFamily: font.nunitosemibold,
        fontSize: 12,
        color: color.color_black
    },
    imageview: {
        paddingLeft: 5
    },
    yearview: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: color.color_darkblue,
        paddingHorizontal: 12,
        paddingVertical: 7
    },
    symbol: {
        fontFamily: font.nunitoregular,
        color: color.color_darkblue,
        fontSize: 12,
        paddingRight: 5
    },
    returntext: {
        fontFamily: font.nunitoregular,
        color: color.color_black,
        fontSize: 12
    }
});

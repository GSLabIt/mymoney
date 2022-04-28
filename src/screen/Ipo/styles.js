import { StyleSheet } from 'react-native';
import { font } from '../../common/Font';
import { color } from '../../common/color';

export const styles = StyleSheet.create({
    container: { backgroundColor: color.color_lightblue, flex: 1 },
    scrollview: {
        backgroundColor: color.color_white,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop:-25
    },
    maintitle: {
        fontFamily: font.nunitobold,
        fontSize: 18,
        color: color.color_black
    },
    axisbanktext: {
        top: 3,
        paddingLeft: 15,
        fontSize: 15,
        color: color.color_black,
        fontFamily: font.nunitosemibold,
        flex: 1
    },
    datetitle: {
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: font.nunitosemibold,
        color: color.color_limit,
        paddingTop: 10
    },
    datesubtitle: {
        alignSelf: 'center',
        fontSize: 13,
        fontFamily: font.nunitoregular,
        color: color.color_darkblue
    },
    rangeview: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    columnd: {
        flexDirection: "column"
    },
    axisview: {
        flexDirection: "row",
        paddingRight: 10,
    },
    bindtext: {
        alignSelf: 'center',
        fontSize: 13,
        fontFamily: font.nunitoregular,
        color: color.color_black,
        paddingTop: 10
    },
    bindsubtext: {
        alignSelf: 'center',
        fontSize: 12,
        fontFamily: font.nunitoregular,
        color: color.color_limit
    },
    upcomingview: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    backgroundview: {
        backgroundColor: color.color_lightblue,
        borderRadius: 12,
        marginTop: 15,
        paddingHorizontal: 10,
        paddingVertical: 15,
    }
});


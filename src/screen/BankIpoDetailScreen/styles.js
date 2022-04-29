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
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    rowview: {
        flexDirection: "row"
    },
    columnview: {
        flexDirection: "column"
    },
    iconstyle: {
        alignSelf: "center"
    },
    nscview: {
        flexDirection: "column",
        paddingLeft: 15
    },
    axisipo: {
        fontSize: 20,
        color: color.color_black,
        fontFamily: font.nunitobold
    },
    nsctext: {
        fontSize: 14,
        color: color.color_limit,
        fontFamily: font.nunitoregular
    },
    numbertext: {
        fontSize: 18,
        color: color.color_green,
        fontFamily: font.nunitobold,
        marginTop: 10
    },
    horizontalline: {
        borderBottomColor: color.color_bankhorizontal,
        opacity:0.5,
        borderBottomWidth: 3,
        marginTop: 15,
    },
    ipodetailstext: {
        fontSize: 18,
        fontFamily: font.nunitobold,
        color: color.color_black,
        marginTop: 15
    },
    subview: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },
    datetext: {
        fontSize: 13,
        fontFamily: font.nunitoregular,
        color: color.color_black
    },
    subtext: {
        fontSize: 12,
        fontFamily: font.nunitoregular,
        color: color.color_limit
    },
    pdftext: {
        fontSize: 13,
        fontFamily: font.nunitoregular,
        color: color.color_green,
        paddingLeft: 5
    },
    companytext: {
        fontFamily: font.nunitobold,
        fontSize: 18,
        color: color.color_black,
    },
    titleContainer: {
        paddingTop: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    animationtext: {
        fontFamily: font.nunitoregular,
        fontSize: 13,
        color: color.color_black,
        textAlign: "justify",
        marginTop: 15
    },
    simplytext: {
        fontFamily: font.nunitoregular,
        fontSize: 13,
        color: color.color_black,
    },
    needtext: {
        fontSize: 15,
        color: color.color_darkblue,
        fontFamily: font.nunitobold
    }
});


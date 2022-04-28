import { StyleSheet } from 'react-native';
import { font } from '../../common/Font';
import { color } from '../../common/color';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: color.color_lightblue
    },

    mainscroll: {
        backgroundColor: color.color_white,
        marginTop: -25
    },

    toptextview: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    numbertext: {
        color: color.color_lightblack,
        fontSize: 18,
        fontFamily: font.nunitobold
    },

    hightext: {
        color: color.color_limit,
        fontSize: 14,
        fontFamily: font.nunitoregular
    },

    rupeetext: {
        fontSize: 24,
        fontFamily: font.nunitobold,
        color: color.color_black,
        marginTop: 10
    },

    precentageview: {
        flexDirection: 'row'
    },

    baracket: {
        fontSize: 14,
        fontFamily: font.nunitoregular,
        color: color.color_limit,
    },

    percentagetext: {
        fontFamily: font.nunitoregular,
        fontSize: 16,
        color: color.color_green,
        justifyContent: "space-between", flex: 1
    },

    horizontalline: {
        borderBottomColor: color.color_bankhorizontal,
        borderBottomWidth: 3,
        marginTop: 15,
    },

    date: {
        fontSize: 14,
        fontFamily: font.nunitoregular,
        color: color.color_limit
    },

    simpletext: {
        fontSize: 16,
        fontFamily: font.nunitobold,
        color: color.color_lightblack
    },

    ordertrendtext: {
        fontSize: 18,
        fontFamily: font.nunitobold,
        color: color.color_black,
        paddingHorizontal: 20,
        paddingTop: 5,
    },

    topview: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 20
    },

    columm: {
        flexDirection: "column"
    },

    ratingcolumn: {
        flexDirection: "column",
        right: 50
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
    },

    resentlyview: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10,
        paddingRight: 10
    },


    charttext: {
        fontSize: 18,
        fontFamily: font.nunitobold,
        color: color.color_black,
        paddingHorizontal: 15,
        paddingTop: 10
    },

    marketview: {
        flexDirection: 'row',
        height: 325,
        paddingHorizontal: 10
    },

    bidtext: {
        fontSize: 13,
        fontFamily: font.nunitoregular,
        color: color.color_black,
    },
    bidblue: {
        color: color.color_darkblue,
        fontSize: 10,
        fontFamily: font.nunitoregular,
    },
    bidred: {
        color: color.color_red,
        fontSize: 10,
        fontFamily: font.nunitoregular,
    },
    buttonmain: {
        flexDirection: 'row',
        paddingTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
        marginBottom: 20
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


    modaltext: {
        fontFamily: font.nunitobold,
        fontSize: 18,
        color: color.color_black,
    },
    rupeemodal: {
        fontSize: 18,
        fontFamily: font.nunitobold,
        color: color.color_bottomtab,
    },
    baracketmodal: {
        fontSize: 13,
        fontFamily: font.nunitoregular,
        color: color.color_black,
    },
    percentagemodal: {
        fontFamily: font.nunitoregular,
        fontSize: 13,
        color: color.color_bottomtab,
    }

});

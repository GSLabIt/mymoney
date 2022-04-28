import { StyleSheet } from 'react-native';
import { font } from '../../common/Font';
import { color } from '../../common/color';

export const styles = StyleSheet.create({
    container: { backgroundColor: color.color_lightblue, flex: 1 },
    Searchview: {
        marginTop: -20,
        marginBottom: 10,
    },
    whiteview: {
        backgroundColor: color.color_white,
        paddingHorizontal: 15, flex: 1,
        paddingBottom: 10
    },
    seeview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    popularfundtext: {
        fontSize: 18,
        fontFamily: font.nunitobold,
        color: color.color_black,
    },
    seealltext: {
        fontSize: 15,
        fontFamily: font.nunitoregular,
        color: color.color_darkblue,
    },
    buttonview: {
        backgroundColor: color.color_lightblue,
        flexDirection: 'row',
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: "center",
        paddingRight: 20
    },
    buttontext: {
        flex: 1,
        textAlign: 'center',
        alignSelf: "center",
        fontFamily: font.poppinsregular,
        color: color.color_darkblue
    }
});

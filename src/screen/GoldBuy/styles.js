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
        backgroundColor: color.color_limit,
    },
    withouttextinput: {
        marginHorizontal: 20
    },
    speratorline: {
        height: 0.6,
        paddingTop: 3,
        backgroundColor: color.color_bankhorizontal,
        opacity: 0.5
    },
    input: {
        height: 35,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        borderColor: color.color_bankhorizontal,
        marginLeft: 0
    },
});


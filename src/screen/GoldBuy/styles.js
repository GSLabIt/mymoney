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

    }
});


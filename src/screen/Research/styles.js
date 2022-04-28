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

    backgroundview: {
        backgroundColor: color.color_lightblue,
        borderRadius: 12,
        marginTop: 15,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginHorizontal: 20
    },
    seperatorLine: {
        borderWidth: 0.2,
        backgroundColor: color.color_limit,
    },
});


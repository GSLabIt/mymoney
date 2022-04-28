import { StyleSheet } from 'react-native';
import { font } from '../../common/Font';
import { color } from '../../common/color';

export const styles = StyleSheet.create({
    container: { backgroundColor: color.color_lightblue, flex: 1 },
    Searchview: {
        marginBottom: 10,
    },
    seperatorLine: {
        borderWidth: 0.2,
        backgroundColor: color.color_limit,
    },
});

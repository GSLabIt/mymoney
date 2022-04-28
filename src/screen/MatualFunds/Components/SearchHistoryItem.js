import React, { memo } from 'react';
import {
    StyleSheet, Text, View,
    TouchableOpacity,
} from 'react-native';
import ClockIcon from "../../../../assets/svg/clockicon"
import CloseIcon from "../../../../assets/svg/closeicon"
import CrossArrow from '../../../../assets/svg/crossarrow';

import { color } from '../../../common/color';
import { font } from '../../../common/Font';

const SearchHistoryItem = ({ item, onItemPress, textSearch }) => {
    return (
        <View
            style={styles.container}
        >
            {!textSearch &&
                <ClockIcon />
            }
            <View width={10} />

            <TouchableOpacity
                style={styles.nameContainer}
                onPress={() => onItemPress(item)}
            >
                <Text style={styles.itemName}>{item}</Text>
            </TouchableOpacity>


            {!!textSearch ?
                <CrossArrow />
                :
                <CloseIcon />
            }

        </View>
    )
}

export default memo(SearchHistoryItem);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 5,
        marginTop: 3,
        alignItems: 'center',
    },
    nameContainer: {
        flex: 1,
    },
    itemName: {
        color: color.color_black,
        fontFamily: font.nunitoregular,
        fontSize: 14
    },
});

import React, { memo } from 'react';

import {
    StyleSheet, Text, View,
    ScrollView,
} from 'react-native';
import { color } from '../../../common/color';
import { font } from '../../../common/Font';
import SearchHistoryItem from './SearchHistoryItem';

const SearchHistory = ({ data, onItemPress, textSearch }) => {

    return (
        <View
            style={styles.container}
        >
            {/* top title */}
            <Text style={styles.title}>Recent Search</Text>

            <ScrollView>
                {
                    data.map((item, index) => (
                        <SearchHistoryItem
                            key={index + "_serchHistory"}
                            item={item}
                            onItemPress={onItemPress}
                            textSearch={textSearch}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default memo(SearchHistory);

const styles = StyleSheet.create({
    container: {
        maxHeight: 200,
        paddingHorizontal: 20,
    },
    title: {
        color: color.color_black,
        fontSize: 16,
        fontFamily: font.nunitobold,
    },
});

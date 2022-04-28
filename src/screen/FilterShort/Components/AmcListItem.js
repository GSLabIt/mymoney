import React, { memo, useState } from 'react';
import {
    StyleSheet, Text, View,
    TouchableOpacity, FlatList
} from 'react-native';
import { color } from '../../../common/color';
import { font } from '../../../common/Font';

const AmcListItem = ({ listingdata }) => {

    return (
        <FlatList
            data={listingdata}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    style={styles.container}>
                    <Text style={{ fontSize: 14, color: color.color_black, fontFamily: font.nunitosemibold }}>{item.name}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
        />
    )
}

export default memo(AmcListItem);

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 10,

    },
});

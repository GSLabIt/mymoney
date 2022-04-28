import React, { memo, useState } from 'react';
import {
    StyleSheet, Text, View,
    TouchableOpacity,
} from 'react-native';
import { color } from '../../../common/color';
import { font } from '../../../common/Font';
import Star from '../../../../assets/svg/star';

const AmcListItem = () => {

    return (
        <View>

            <TouchableOpacity style={styles.container}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </TouchableOpacity>

            <TouchableOpacity style={styles.container}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Text style={{ top: -5, fontFamily: font.nunitobold, fontSize: 14 }}>{`& Up`}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container}>
                <Star />
                <Star />
                <Star />
                <Text style={{ top: -5, fontFamily: font.nunitobold, fontSize: 14 }}>{`& Up`}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container}>
                <Star />
                <Star />
                <Text style={styles.texttitle}>{`& Up`}</Text>
            </TouchableOpacity>

        </View>
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
    texttitle: {
        top: -5,
        fontFamily: font.nunitobold,
        fontSize: 14
    }
});

import React, { memo } from 'react';
import {
    StyleSheet, Text, View,
    TouchableOpacity, FlatList
} from 'react-native';
import { color } from '../../../common/color';
import { font } from '../../../common/Font';
import Axis from '../../../../assets/svg/axis';
import Icici from '../../../../assets/svg/icici';
import Star from '../../../../assets/svg/star';
import HorizontalSeperator from './HorizontalSeperator';
import { useNavigation } from '@react-navigation/native';

const PopularFundList = ({ horizontal, backgroundColor }) => {
    const navigation = useNavigation();
    const DATA = [
        {
            icon: <Axis />,
            name: "Axis Small Cap Fund Direct",
            subname: "Growth",
            subtext: "Equity Small Cap",
            percentage: "32.0%",
            return: "3Y Returns",
            review: <Star />,
            star: " • 5  ",

        },
        {
            icon: <Icici />,
            name: "Axis Small Cap Fund Direct",
            subname: "Growth",
            subtext: "Equity Sectoral / Thematic",
            percentage: "32.0%",
            return: "3Y Returns",
            // review: <Star />
        },
        {
            icon: <Axis />,
            name: "Axis Small Cap Fund Direct",
            subname: "Growth",
            subtext: "Equity Small Cap",
            percentage: "32.0%",
            return: "3Y Returns",
            review: <Star />,
            star: " • 5  ",
        },
        {
            icon: <Icici />,
            name: "Axis Small Cap Fund Direct",
            subname: "Growth",
            subtext: "Equity Sectoral / Thematic",
            percentage: "32.0%",
            return: "3Y Returns",
            // review: <Star />
        },
        {
            icon: <Axis />,
            name: "Axis Small Cap Fund Direct",
            subname: "Growth",
            subtext: "Equity Small Cap",
            percentage: "32.0%",
            return: "3Y Returns",
            review: <Star />,
            star: " • 5  ",
        },
        {
            icon: <Icici />,
            name: "Axis Small Cap Fund Direct",
            subname: "Growth",
            subtext: "Equity Sectoral / Thematic",
            percentage: "32.0%",
            return: "3Y Returns",
            // review: <Star />
        },

    ];

    return (
        <FlatList
            data={DATA}
            horizontal={horizontal}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    style={[styles.container, { backgroundColor }]} onPress={() => navigation.navigate("AxisBankDetailsScreen")}>

                    <View style={styles.image}>{item.icon}</View>
                    <View style={styles.nameview}>
                        <Text style={styles.nametext}>{item.name}</Text>
                        <Text style={styles.nametext}>{item.subname}</Text>
                        <Text style={styles.subtext}>{item.subtext}

                            <Text>{item.star}</Text>
                            <View style={{ alignSelf: 'center' }}>{item.review}</View>
                        </Text>

                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.percentagetext}>{item.percentage}</Text>
                        <Text style={styles.returntext}>{item.return}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={HorizontalSeperator}
            removeClippedSubviews={false} 
        />
    )
}

export default memo(PopularFundList);

const styles = StyleSheet.create({
    container: {
        // backgroundColor: color.color_lightblue,
        borderRadius: 12,
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 10,
        height: 80
    },
    image: {
        alignSelf: 'center'
    },
    nameview: {
        flexDirection: "column",
        paddingRight: 20,
        paddingLeft: 10
    },
    nametext: {
        fontSize: 15,
        fontFamily: font.nunitosemibold,
        color: color.color_black
    },
    subtext: {
        fontSize: 13,
        fontFamily: font.nunitoregular,
        color: color.color_limit,
        alignSelf: 'center',
        right: 18
    },
    percentagetext: {
        fontSize: 15,
        fontFamily: font.nunitosemibold,
        color: color.color_green,
    },
    returntext: {
        fontSize: 12,
        fontFamily: font.nunitoregular,
        color: color.color_limit,

    }


});

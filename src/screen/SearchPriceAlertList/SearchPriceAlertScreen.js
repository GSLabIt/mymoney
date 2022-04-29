import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './styles';
import SearchHeader from '../MatualFunds/Components/SearchHeader';
import Axis from '../../../assets/svg/axis';
import Icici from '../../../assets/svg/icici';
import Hdfc from '../../../assets/svg/hdfc';
import Reliance from '../../../assets/svg/reliance';
import Sunpharma from '../../../assets/svg/sunpharma';

import Yes from '../../../assets/svg/yes';
import { color } from '../../common/color';
import { font } from '../../common/Font';
import Cross from '../../../assets/svg/cross';
import Parle from '../../../assets/svg/parle';


const Data = [
    {
        icon: <Axis />,
        bankname: "AXISBANK",
        price: "₹2126.20",
    },
    {
        icon: <Icici />,
        bankname: "ICICI",
        price: "₹1,085.00",
    },
    {
        icon: <Yes />,
        bankname: "YESBANK",
        price: "₹2126.20",
    },
    {
        icon: <Hdfc />,
        bankname: "HDFCBANK",
        price: "₹1,085.00",
    },
    {
        icon: <Parle />,
        bankname: "PARLE",
        price: "₹2126.20",
    },
    {
        icon: <Reliance />,
        bankname: "RELIANCE",
        price: "₹1,085.00",
    },
    {
        icon: <Sunpharma />,
        bankname: "Sunpharma",
        price: "₹2126.20",
    },
    {
        icon: <Axis />,
        bankname: "AXISBANK",
        price: "₹1,085.00",
    },
    {
        icon: <Icici />,
        bankname: "ICICI",
        price: "₹2126.20",
    },
    {
        icon: <Yes />,
        bankname: "YESBANK",
        price: "₹1,085.00",
    },
    {
        icon: <Hdfc />,
        bankname: "HDFCBANK",
        price: "₹2126.20",
    },
    {
        icon: <Parle />,
        bankname: "PARLE",
        price: "₹1,085.00",
    },


];


const SearchPriceAlertScreen = ({ navigation }) => {

    const [textSearch, settextSearch] = useState("");



    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flexDirection: 'row', paddingBottom: 20, paddingVertical: 15, paddingHorizontal: 20 }}>
                <Text style={{ flex: 1, fontSize: 20, fontFamily: font.nunitobold, color: color.color_black }}>Create Price Alert</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{alignSelf:"center"}}>
                    <Cross />
                </TouchableOpacity>
            </View>
            <View style={styles.Searchview}>
                <SearchHeader
                    textSearch={textSearch}
                    settextSearch={settextSearch}
                />

            </View>

            <View style={{ backgroundColor: color.color_white, flex: 1, paddingHorizontal: 20, paddingBottom: 40 }}>
                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                    <Text style={{ flex: 1, color: color.color_limit, fontSize: 12, fontFamily: font.nunitoregular }}>Stocks</Text>
                    <Text style={{ color: color.color_limit, fontSize: 12, fontFamily: font.nunitoregular }}>ALERT PRICE</Text>
                </View>

                <FlatList
                    data={Data}
                    renderItem={({ item, index }) => (

                        <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 15 }} onPress={() => navigation.goBack()}>
                            {item.icon}
                            <Text style={{ flex: 1, paddingLeft: 15 }}>{item.bankname}</Text>
                            <Text>{item.price}</Text>

                        </TouchableOpacity>

                    )}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <View style={styles.seperatorLine} />}
                />
            </View>

        </SafeAreaView>
    )
}

export default SearchPriceAlertScreen

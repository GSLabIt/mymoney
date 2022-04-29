import React, { useState, useRef, useEffect, useMemo } from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity, Text, FlatList } from 'react-native'
import { styles } from './styles';
import Smart from '../../../assets/svg/smart';
import Trader from '../../../assets/svg/trader';
import Appheader from '../../component/AppHeader/appheader';
import Options from '../../../assets/svg/options';
import Buzz from '../../../assets/svg/buzz';
import Smallcases from '../../../assets/svg/smallcases';
import Screener from '../../../assets/svg/screener';
import News from '../../../assets/svg/news';
import { color } from '../../common/color';
import { font } from '../../common/Font';

const Data = [
    {
        icon: <Smart />,
        bankname: "Smart Investor",
    },
    {
        icon: <Trader />,
        bankname: "TraderSmith",
    },
    {
        icon: <Options />,
        bankname: "Sensibull for options",
    },
    {
        icon: <Buzz />,
        bankname: "Market Buzz",
    },
    {
        icon: <Screener />,
        bankname: "Screeners",
    },
    {
        icon: <Smallcases />,
        bankname: "Smallcases",
    },
    {
        icon: <News />,
        bankname: "News",
    },

];

const ResearchScreen = ({ navigation }) => {


    return (
        <SafeAreaView style={styles.container}>
            <Appheader onPress={() => navigation.goBack()} header="Research" />

            <ScrollView style={styles.mainscroll}>

                <TouchableOpacity style={styles.backgroundview}>
                    <FlatList
                        data={Data}
                        renderItem={({ item, index }) => (

                            <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                                {item.icon}
                                <Text style={{ flex: 1, paddingLeft: 15 }}>{item.bankname}</Text>
                                <Text>{item.price}</Text>

                            </View>

                        )}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <View style={styles.seperatorLine} />}
                        removeClippedSubviews={false} 
                    />

                </TouchableOpacity>


            </ScrollView>
        </SafeAreaView>
    )
}

export default ResearchScreen

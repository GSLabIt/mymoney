import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
import { styles } from './styles';
import Appheader from '../../component/AppHeader/appheader';
import { color } from '../../common/color';
import { font } from '../../common/Font';
import Golds from '../../../assets/svg/golds';
import Equal from '../../../assets/svg/equal';
import Buygoldi from '../../../assets/svg/buygoldi';
import Sellcoin from '../../../assets/svg/sellcoin';
import SecuredVault from '../../../assets/svg/securedvault';
import CustomButton from '../../component/buttons/CustomButton';


const GoldBuyScreen = ({ navigation }) => {


    const Data = [
        {
            icon: <Buygoldi />,
            title: "Buy Gold",
            subtitle: "A safe and simple way to accumulate gold buy gold for as little as Rs.1"
        },
        {
            icon: <Sellcoin />,
            title: "Buy Gold",
            subtitle: "Sell your gold with one click. from anywhere and at anytime."
        },
        {
            icon: <SecuredVault />,
            title: "Secured Vault",
            subtitle: "Your gold is stored in vault controlled & monitor by Mymoney."
        },
    ];


    return (
        <SafeAreaView style={styles.container}>
            <Appheader onPress={() => navigation.goBack()} header="Gold" />

            <ScrollView style={styles.mainscroll}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10, backgroundColor: color.color_darkblue, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 14, fontFamily: font.nunitobold, color: color.color_white }}>BUY</Text>
                    <Text style={{ fontSize: 14, fontFamily: font.nunitobold, color: color.color_white }}>VAULT</Text>
                    <Text style={{ fontSize: 14, fontFamily: font.nunitobold, color: color.color_white }}>SELL</Text>
                </View>

                <View style={{ flexDirection: "row", paddingTop: 20, paddingHorizontal: 20, justifyContent: "space-between" }}>

                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontSize: 15, fontFamily: font.nunitosemibold, color: color.color_black }}>Current Buying Price</Text>
                        <Text style={{ fontSize: 15, fontFamily: font.nunitobold, color: color.color_green }}>₹3,229.947/gm</Text>
                        <Text style={{ fontSize: 15, fontFamily: font.nunitoregular, color: color.color_limit }}>Price vaild for 4:59</Text>
                    </View>

                    <View style={{ paddingBottom: 15 }}>
                        <Golds />
                    </View>

                </View>

                <View style={styles.speratorline} />

                <Text style={{ fontFamily: font.nunitosemibold, fontSize: 15, color: color.color_black, alignSelf: 'center', paddingTop: 10 }}>Enter amount of gold you want to buy</Text>
                <Text style={{ fontFamily: font.nunitoregular, fontSize: 12, color: color.color_limit, alignSelf: 'center', paddingTop: 5 }}>(Minimum amount ₹50)</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>

                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ color: color.color_limit, fontSize: 12, fontFamily: font.nunitoregular }}>In Rupees</Text>
                        <Text style={{ borderWidth: 1, borderRadius: 4, paddingVertical: 8, paddingHorizontal: 8, fontSize: 12, fontFamily: font.nunitoregular, marginVertical: 5, borderColor: color.color_filtegray, color: color.color_black }}>₹ : <Text style={{ fontSize: 12, fontFamily: font.nunitoregular, color: color.color_filtegray }}>  Amount</Text></Text>
                        <Text style={{ color: color.color_limit, fontFamily: 10, fontFamily: font.nunitoregular }}>(includs of 3% GST)</Text>
                    </View>

                    <View style={{ alignSelf: "center" }}>
                        <Equal />
                    </View>

                    <View style={{ flexDirection: "column" }}>
                        <Text style={{ color: color.color_limit, fontFamily: 10, fontFamily: font.nunitoregular }}>In Grams</Text>
                        <Text style={{ borderWidth: 1, borderRadius: 4, paddingVertical: 8, paddingRight: 50, paddingHorizontal: 8, fontSize: 12, fontFamily: font.nunitoregular, marginVertical: 5, borderColor: color.color_filtegray, color: color.color_placeholder }}>Wight</Text>
                    </View>

                </View>

                <View style={{ marginTop: 20, marginBottom: 30 }}>
                    <CustomButton
                        textname="BUY NOW"
                        onPress={() => navigation.navigate('BankIpoScreen')}
                    />
                </View>

                <View style={styles.speratorline} />

                <Text style={{ fontFamily: font.nunitosemibold, fontSize: 15, color: color.color_black, alignSelf: 'center', paddingTop: 5 }}>How it Works?</Text>

                <View style={{ paddingHorizontal: 30 }}>
                    <FlatList
                        data={Data}
                        renderItem={({ item, index }) => (

                            <View style={{ flexDirection: "row", paddingVertical: 10, }}>
                                {item.icon}
                                <View style={{ flexDirection: "column" }}>
                                    <Text style={{ paddingLeft: 15, fontSize: 14, fontFamily: font.nunitosemibold, color: color.color_black }}>{item.title}</Text>
                                    <Text style={{ paddingLeft: 15, fontSize: 12, fontFamily: font.nunitoregular, color: color.color_placeholder }}>{item.subtitle}</Text>
                                </View>

                            </View>

                        )}
                        keyExtractor={item => item.id}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default GoldBuyScreen

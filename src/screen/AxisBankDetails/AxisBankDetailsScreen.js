import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
    TouchableOpacity,

} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { color } from '../../common/color';
import Appheader from '../../component/AppHeader/appheader';
import BankTopTab from '../../navigation/BankDetailsTopTab/BankTopTab';
import Chandlechart from '../../../assets/svg/chandlechart';
import Linechartlogo from '../../../assets/svg/linechartlogo';
import Download from '../../../assets/svg/download';
import useStore from '../../../store';
import * as Progress from 'react-native-progress';
import PopularFundList from '../MatualFunds/Components/PopularFundList';

const AxisBankDetailsScreen = ({ navigation }) => {
    const { show } = useStore();
    const windowWidth = Dimensions.get('window').width;



    return (
        <SafeAreaView style={styles.container}>
            <Appheader onPress={() => navigation.goBack()} header="AXISBANK" icon />

            <ScrollView style={styles.mainscroll}>
                <View style={styles.toptextview}>
                    <Text style={styles.numbertext}>Axis Small Cap Fund Direct Growth</Text>
                    <Text style={styles.hightext}>Very High Risk • Equity • Small Cap</Text>

                    <Text style={styles.rupeetext}>32.00%</Text>

                    <View style={styles.precentageview}>
                        <Text style={styles.percentagetext}>+0.15%<Text style={styles.baracket}>1D</Text></Text>
                        <Text style={styles.baracket}>3Y annualised</Text>
                    </View>

                </View>

                <View style={styles.horizontalline} />

                <Text style={styles.charttext}>Chart</Text>

                <View style={styles.marketview}>
                    <BankTopTab />
                    <TouchableOpacity style={{ paddingTop: 10 }} onPress={show}>
                        <Linechartlogo />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ paddingTop: 9, paddingLeft: 5 }}
                        onPress={show}>
                        <Chandlechart />
                    </TouchableOpacity>
                    <View style={{ paddingTop: 13 }}>
                        <Download />
                    </View>
                </View>

                <View style={styles.horizontalline} />

                <View style={styles.topview}>
                    <View style={styles.columm}>
                        <Text style={styles.date}>NAV: 23-Mar-2022</Text>
                        <Text style={styles.simpletext}>₹ 66.69</Text>
                    </View>

                    <View style={styles.ratingcolumn}>
                        <Text style={styles.date}>Rating</Text>
                        <Text style={styles.simpletext}>₹ 66.69</Text>
                    </View>
                </View>



                <View style={styles.topview}>
                    <View style={styles.columm}>
                        <Text style={styles.date}>Min. SIP amount</Text>
                        <Text style={styles.simpletext}>₹ 500</Text>
                    </View>

                    <View style={styles.ratingcolumn}>
                        <Text style={styles.date}>Fund Size</Text>
                        <Text style={styles.simpletext}>₹ 8,262 Cr</Text>
                    </View>
                </View>

                <View style={styles.horizontalline} />

                <Text
                    style={styles.ordertrendtext}>
                    Monthly orders trend
                </Text>

                <View style={styles.topview}>
                    <View style={styles.columm}>
                        <Text style={styles.date}>SIP orders</Text>
                        <Text style={styles.simpletext}>84.7%</Text>
                    </View>

                    <View style={styles.columm}>
                        <Text style={styles.date}>One-time orders</Text>
                        <Text style={styles.simpletext}>15.3%</Text>
                    </View>
                </View>

                <Progress.Bar
                    progress={0.8}
                    width={windowWidth * 0.9}
                    color={color.color_darkblue}
                    unfilledColor={color.color_progressblue}
                    borderWidth={0.2}
                    style={{ marginHorizontal: 20, marginTop: 10 }}
                />


                <View style={styles.horizontalline} />

                <View style={styles.resentlyview}>
                    <Text
                        style={styles.ordertrendtext}>
                        Recently viewed
                    </Text>

                    <TouchableOpacity style={styles.yearview} >
                        <Text style={styles.symbol}>{`< >`}</Text>
                        <Text style={styles.returntext}>3Y Returns</Text>
                    </TouchableOpacity>
                </View>

                <PopularFundList />

                <View style={styles.horizontalline} />


                <View style={styles.buttonmain}>

                    <TouchableOpacity style={styles.buytext}>
                        <Text style={styles.onetext}>ONE-TIME</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.selltext}>
                        <Text style={styles.sametext}>MONTHLY SIP</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default AxisBankDetailsScreen;

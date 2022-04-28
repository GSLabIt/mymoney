import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import Appheader from '../../component/AppHeader/appheader';
import Axis from '../../../assets/svg/axis';
import Icici from '../../../assets/svg/icici';
import Hdfc from "../../../assets/svg/hdfc";
import IpoRight from '../../../assets/svg/iporight';
import CustomButton from '../../component/buttons/CustomButton';


const IpoScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Appheader
                onPress={() => navigation.goBack()}
                header="Initial Public Offerings"
            />
            <ScrollView style={styles.scrollview}>

                <Text style={styles.maintitle}>Open Now (1)</Text>
                <TouchableOpacity style={styles.backgroundview} onPress={() => navigation.navigate('BankIpoScreen')}>

                    <View style={styles.axisview}>
                        <Axis />
                        <Text style={styles.axisbanktext}>AXISBANK</Text>
                        <IpoRight />
                    </View>

                    <Text style={styles.datetitle}>Bidding Dates</Text>
                    <Text style={styles.datesubtitle}>24 Mar - 28 Mar ‘22</Text>

                    <View style={styles.rangeview}>

                        <View style={styles.columnd}>
                            <Text style={styles.datetitle}>Price Range</Text>
                            <Text style={styles.datesubtitle}>₹615 - ₹650</Text>
                        </View>

                        <View style={styles.columnd}>
                            <Text style={styles.datetitle}>Issue Size</Text>
                            <Text style={[styles.datesubtitle, { paddingBottom: 15 }]}>4,300 Cr</Text>
                        </View>

                    </View>
                    <CustomButton
                        textname="Apply"
                        onPress={() => navigation.navigate('BankIpoScreen')}
                    />

                </TouchableOpacity>

                <Text style={styles.maintitle}>Upcoming (16)</Text>

                <TouchableOpacity
                    style={styles.backgroundview} onPress={() => navigation.navigate('BankIpoScreen')}>

                    <View style={styles.axisview}>
                        <Icici />
                        <Text style={styles.axisbanktext}>ICICI</Text>
                        <IpoRight />
                    </View>


                    <View style={styles.upcomingview}>

                        <View style={styles.columnd}>
                            <Text style={styles.bindtext}>28 Mar - 30 Mar ‘22</Text>
                            <Text style={styles.bindsubtext}>Bidding Dates</Text>
                        </View>

                        <View style={styles.columnd}>
                            <Text style={styles.bindtext}>₹65 - ₹68</Text>
                            <Text style={styles.bindsubtext}>Price Range</Text>
                        </View>

                        <View style={styles.columnd}>
                            <Text style={styles.bindtext}>60 Cr</Text>
                            <Text style={styles.bindsubtext}>Issue Size</Text>
                        </View>

                    </View>

                </TouchableOpacity>

                <View
                    style={styles.backgroundview}>

                    <View style={styles.axisview}>
                        <Axis />
                        <Text style={styles.axisbanktext}>AXISBANK</Text>
                        <IpoRight />
                    </View>

                </View>

                <View
                    style={styles.backgroundview}>

                    <View style={styles.axisview}>
                        <Hdfc />
                        <Text style={styles.axisbanktext}>HDFCBANK</Text>
                        <IpoRight />
                    </View>

                </View>

                <View
                    style={styles.backgroundview}>

                    <View style={styles.axisview}>
                        <Axis />
                        <Text style={styles.axisbanktext}>AXISBANK</Text>
                        <IpoRight />
                    </View>

                </View>

                <View
                    style={styles.backgroundview}>

                    <View style={styles.axisview}>
                        <Axis />
                        <Text style={styles.axisbanktext}>AXISBANK</Text>
                        <IpoRight />
                    </View>

                </View>

                <View
                    style={styles.backgroundview}>

                    <View style={styles.axisview}>
                        <Hdfc />
                        <Text style={styles.axisbanktext}>HDFCBANK</Text>
                        <IpoRight />
                    </View>

                </View>

                <View
                    style={styles.backgroundview}>

                    <View style={styles.axisview}>
                        <Axis />
                        <Text style={styles.axisbanktext}>AXISBANK</Text>
                        <IpoRight />
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default IpoScreen

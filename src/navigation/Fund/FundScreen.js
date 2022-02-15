import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Add from '../../../assets/svg/add';
import Withdraw from '../../../assets/svg/withdraw';

const FundScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.mainview}>
          <Text style={styles.fund}>Funds</Text>
          <Text style={styles.cash}>( Cash + Collateral )</Text>
        </View>
        <View style={styles.subview}>
          <View style={styles.mainview}>
            <Text style={styles.available}>Available margin</Text>
            <Text style={styles.numberText}>₹2,265.35</Text>
          </View>
          <View style={styles.horizontalline} />

          <Text style={[styles.balancetext, {paddingTop: 15}]}>
            Opening balance
          </Text>
          <Text style={styles.balancenumber}>2,4389</Text>
          <Text style={[styles.balancetext, {paddingTop: 10}]}>Payin</Text>
          <Text style={styles.balancenumber}>0.00</Text>
          <Text style={[styles.balancetext, {paddingTop: 10}]}>Span</Text>
          <Text style={styles.balancenumber}>0,0015 BTC</Text>
          <Text style={[styles.balancetext, {paddingTop: 10}]}>
            Delivery Margin
          </Text>
          <Text style={styles.balancenumber}>0.00</Text>
          <Text style={[styles.balancetext, {paddingTop: 10}]}>
            Option Primum
          </Text>
          <Text style={styles.balancenumber}>0.00</Text>
          <View style={styles.horizontalline} />
          <Text style={[styles.balancetext, {paddingTop: 10}]}>
            Total Collateral
          </Text>
          <Text style={styles.balancenumber}>0.00</Text>

          <View style={styles.buttonview}>
            <View style={styles.addfundview}>
              <Add />
              <Text style={styles.bothText}>Add Funds</Text>
            </View>
            <View style={styles.withdrawview}>
              <Withdraw />
              <Text style={styles.bothText}>Withdraw</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FundScreen;

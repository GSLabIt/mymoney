import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ColorPropType,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Drawer from '../../../assets/svg/drawer';
import CustomSearch from '../../component/CustomSearchview/CustomSearch';
import {LineChart} from 'react-native-chart-kit';
import Yes from "../../../assets/svg/yes";
import Hdfc from '../../../assets/svg/hdfc';
import Parle from '../../../assets/svg/parle';
import Axis from '../../../assets/svg/axis';
import Sunpharma from '../../../assets/svg/sunpharma';
import Icici from '../../../assets/svg/icici';
import Smallreliance from '../../../assets/svg/smallreliance';

const SeeAll = ({navigation}) => {
  const DATA = [
    {
      icon:<Axis/>,
      bankname: 'AXISBANK',
      nse: 'NSE',
      prise: '2126.20',
      result: '+30.00 (',
      ltp: '+0.72%',
      bracket: ')',
      colorstatus: color.color_green,
      data: {
        datasets: [
          {
            data: [5, 30, 15, 50],
          },
        ],
      },
    },
    {
      icon:<Yes/>,
      bankname: 'YESBANK',
      nse: 'NSE',
      prise: '245.20',
      result: '-15.00 (',
      ltp: '-1.00%',
      bracket: ')',
      colorstatus: color.color_red,
      data: {
        datasets: [
          {
            data: [5, 30, 15, 50],
          },
        ],
      },
    },
    {
      icon: <Hdfc/>,
      bankname: 'HDFCBANK',
      nse: 'BSE',
      prise: '1085.00',
      result: '+45.00 (',
      ltp: '+0.01%',
      bracket: ')',
      colorstatus: color.color_green,
      data: {
        datasets: [
          {
            data: [5, 30, 15, 50],
          },
        ],
      },
    },
    {
      icon:<Parle/>,
      bankname: 'PARLE',
      nse: 'NSE',
      prise: '245.20',
      result: '+15.00 (',
      ltp: '+1.00%',
      bracket: ')',
      colorstatus: color.color_green,
      data: {
        datasets: [
          {
            data: [5, 30, 15, 50],
          },
        ],
      },
    },

    {
      icon: <Smallreliance/>,
      bankname: 'RELIANCE',
      nse: 'NSE',
      prise: '2510.20',
      result: '+15.00 (',
      ltp: '+1.00%',
      bracket: ')',
      colorstatus: color.color_green,
      data: {
        datasets: [
          {
            data: [5, 30, 15, 50],
          },
        ],
      },
    },

    {
      icon: <Sunpharma/>,
      bankname: 'Sunpharma',
      nse: 'NSE',
      prise: '252.02',
      result: '-45.10 (',
      ltp: '-2.48%',
      bracket: ')',
      colorstatus: color.color_red,
      data: {
        datasets: [
          {
            data: [5, 30, 15, 50],
          },
        ],
      },
    },

    {
      icon: <Hdfc/>,
      bankname: 'HDFCBANK',
      nse: 'BSE',
      prise: '2510.20',
      result: '+15.65 (',
      ltp: '+1.00%',
      bracket: ')',
      colorstatus: color.color_green,
      data: {
        datasets: [
          {
            data: [5, 30, 15, 50],
          },
        ],
      },
    },

    {
      icon: <Icici/>,
      bankname: 'ICICI BANK',
      nse: 'NSE',
      prise: '451.20',
      result: '+15.65 (',
      ltp: '+1.00%',
      bracket: ')',
      colorstatus: color.color_green,
      data: {
        datasets: [
          {
            data: [5, 30, 15, 50],
          },
        ],
      },
    },

    {
      icon:<Yes/>,
      bankname: 'YESBANK',
      nse: 'NSE',
      prise: '245.20',
      result: '-15.00 (',
      ltp: '-1.00%',
      bracket: ')',
      colorstatus: color.color_red,
      data: {
        datasets: [
          {
            data: [5, 30, 15, 50],
          },
        ],
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity
          style={{paddingLeft: 20, paddingRight: 15, paddingTop: 15}}
          onPress={() => navigation.openDrawer()}>
          <Drawer />
        </TouchableOpacity>
        <View style={{flex: 1, marginRight: 10}}>
          <CustomSearch />
        </View>
      </View>

      <View
        style={{
          backgroundColor: color.color_white,
          flex: 1,
          marginTop: 25,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 10,
          paddingTop: 20,
          paddingBottom:20
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: font.nunitosemibold,
            color: color.color_black,
          }}>
          All Stocks
        </Text>

        <FlatList
          data={DATA}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={{
                backgroundColor: color.color_lightblue,
                borderRadius: 12,
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
              onPress={() => navigation.navigate('BankDetails')}>
             <View style={{ alignSelf: 'center' }}>{item.icon}</View>
              <View style={{flexDirection: 'column', flex: 1, paddingLeft: 10}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: font.nunitoregular,
                    fontWeight: '600',
                    paddingTop: 2,
                    color: color.color_black,
                  }}>
                  {item.bankname}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: font.nunitoregular,
                    fontWeight: '600',

                    color: color.color_limit,
                  }}>
                  {item.nse}
                </Text>
              </View>

              <LineChart
                data={item.data}
                width={200}
                height={50}
                withDots={false}
                withInnerLines={false}
                withOuterLines={false}
                withHorizontalLabels={false}
                chartConfig={{
                  backgroundColor: '#EDF1F9',
                  backgroundGradientFrom: '#EDF1F9',
                  backgroundGradientTo: '#EDF1F9',

                  color: (opacity = 0) => '#219653',
                }}
                style={{
                  flex: 1,
                  right: 30,
                  zIndex: -1,
                  alignItems: 'center',
                  bottom: 10,
                }}
                bezier
              />

              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: font.nunitoregular,
                    fontWeight: '600',
                    paddingTop: 2,
                    color: item.colorstatus,
                    textAlign: 'center',
                    alignSelf:"flex-end"
                  }}>
                  {item.prise}
                </Text>

                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: font.nunitoregular,
                      fontWeight: '600',

                      color: color.color_black,
                      textAlign: 'center',
                    }}>
                    {item.result}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: font.nunitoregular,
                      fontWeight: '600',
                      color: item.colorstatus,
                      textAlign: 'center',
                    }}>
                    {item.ltp}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: font.nunitoregular,
                      fontWeight: '600',
                      color: color.color_black,
                      textAlign: 'center',
                    }}>
                    {item.bracket}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default SeeAll;

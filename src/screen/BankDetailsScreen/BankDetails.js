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
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {font} from '../../common/Font';
import {color} from '../../common/color';

import Appheader from '../../component/AppHeader/appheader';
import BankTopTab from '../../navigation/BankDetailsTopTab/BankTopTab';
import Chandlechart from '../../../assets/svg/chandlechart';
import Linechartlogo from '../../../assets/svg/linechartlogo';
import Download from '../../../assets/svg/download';
import useStore from '../../../store';
import CustomSellModal from '../../component/CustomModal/CustomSellModal';

const BankDetails = ({navigation}) => {
  const {show} = useStore();
  const [focus, setFocus] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [iscolor, setIsColor] = useState('');
  const [istext, setIsText] = useState('BUY');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Appheader onPress={() => navigation.goBack()} header="AXISBANK" />

      <ScrollView style={styles.mainscroll}>
        <View style={styles.toptextview}>
          <View style={styles.subview}>
            <Text style={styles.numbertext}>₹ 2126.20</Text>
            <View style={styles.nseview}>
              <Text
                style={[
                  styles.nseText,
                  {
                    color: !focus ? color.color_black : color.color_white,
                    backgroundColor: focus ? color.color_green : '#C6C6C6',
                  },
                ]}
                onPress={() => setFocus(!false)}>
                NSE
              </Text>
              <Text
                style={[
                  styles.nseText,
                  {
                    color: focus ? color.color_black : color.color_white,
                    backgroundColor: focus ? '#C6C6C6' : color.color_green,
                  },
                ]}
                onPress={() => setFocus(!true)}>
                BSE
              </Text>
            </View>
          </View>

          <View style={styles.subview}>
            <Text style={styles.rupeetext}>+30.00</Text>
            <View style={styles.precentageview}>
              <Text style={styles.baracket}>(</Text>
              <Text style={styles.percentagetext}>+0.72%</Text>
              <Text style={styles.baracket}>)</Text>
            </View>
          </View>
        </View>

        <View style={styles.horizontalline} />

        <Text style={styles.charttext}>Chart</Text>

        <View style={styles.marketview}>
          <BankTopTab />
          <TouchableOpacity style={{paddingTop: 10}} onPress={show}>
            <Linechartlogo />
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingTop: 9, paddingLeft: 5}}
            onPress={show}>
            <Chandlechart />
          </TouchableOpacity>
          <View style={{paddingTop: 13}}>
            <Download />
          </View>
        </View>

        <View style={styles.horizontalline} />

        <Text
          style={{
            fontSize: 18,
            fontFamily: font.nunitobold,
            color: color.color_black,
            paddingHorizontal: 12,
            paddingTop: 5,
          }}>
          Market Depth
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 12,
            paddingTop: 15,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.bidtext}>Bid</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>Total</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.bidtext}>Offer</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.bidtext}>Qty</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
            <Text style={styles.bidblue}>0.00</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.bidtext}>Offer</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>Total</Text>
          </View>

          <View style={{flexDirection: 'column'}}>
            <Text style={styles.bidtext}>Order</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.bidtext}>Qty</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
            <Text style={styles.bidred}>0.00</Text>
          </View>
        </View>

        <View style={styles.horizontalline} />

        <View style={styles.buttonmain}>
          <TouchableOpacity
            style={styles.buytext}
            onPress={() => {
              setIsColor(color.color_darkblue),
                setModalVisible(true),
                setIsText('BUY');
            }}>
            <Text style={styles.sametext}>BUY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selltext}
            onPress={() => {
              setIsColor(color.color_red),
                setModalVisible(true),
                setIsText('SELL');
            }}>
            <Text style={styles.sametext}>SELL</Text>
          </TouchableOpacity>
        </View>
        <CustomSellModal
          modalshow={isModalVisible}
          onPressClose={toggleModal}
          maincolor={iscolor}
          leadtext={istext}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BankDetails;

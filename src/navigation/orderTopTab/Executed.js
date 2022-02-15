import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {font} from '../../common/Font';
import {color} from '../../common/color';

const Executed = () => {
  const DATA = [
    {
      //   qty:"1",
      status: 'SELL',
      bankname: 'AXISBANK',
      limit: 'NSE REG LIMIT',
      prise: '2126',
      result: 'COMPLETE',
      ltp: '2126.20',
      colorstatus: color.color_red,
      colorresult: color.color_green,
    },
    {
      // qty:"1",
      status: 'BUY',
      bankname: 'ICICIBANK',
      limit: 'NSE REG LIMIT',
      prise: '354',
      result: 'REJECT',
      ltp: '325.20',
      colorstatus: color.color_darkblue,
      colorresult: color.color_red,
    },
    {
      // qty:"1",
      status: 'BUY',
      bankname: 'AXISBANK',
      limit: 'NSE REG LIMIT',
      prise: '354',
      result: 'COMPLETE',
      ltp: '325.20',
      colorstatus: color.color_darkblue,
      colorresult: color.color_green,
    },
  ];

  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={({item, index}) => (
          <View
            style={{
              backgroundColor: color.color_lightblue,
              borderRadius: 12,
              flexDirection: 'row',
              marginTop: 15,
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 15,
            }}>
            <View style={{flexDirection: 'column', flex: 1}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    backgroundColor: item.colorstatus,
                    paddingHorizontal: 20,
                    paddingVertical: 2,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 8,
                      fontFamily: font.nunitoregular,
                      fontWeight: '600',
                      paddingTop: 2,
                      color: color.color_white,
                    }}>
                    {item.status}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    fontWeight: '600',
                    color: color.color_limit,
                    paddingLeft: 5,
                    alignSelf: 'center',
                  }}>
                  QTY:1
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: font.nunitoregular,
                  fontWeight: '600',
                  paddingTop: 2,
                  color: color.color_black,
                }}>
                {item.bankname}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: font.nunitoregular,
                  fontWeight: '600',
                  paddingTop: 2,
                  color: color.color_limit,
                }}>
                {item.limit}
              </Text>
            </View>
            <View
              style={{flexDirection: 'column', alignSelf: 'flex-end', flex: 1}}>
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: font.nunitoregular,
                  fontWeight: '600',
                  color: color.color_limit,
                  textAlign: 'center',
                }}>
                Order Prise
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: font.nunitoregular,
                  fontWeight: '600',
                  textAlign: 'center',
                  color: color.color_black,
                }}>
                {item.prise}
              </Text>
            </View>
            <View style={{flexDirection: 'column', flex: 1}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    fontWeight: '600',
                    color: color.color_limit,
                    alignSelf:"center"
                  }}>
                  1mins ago
                </Text>
                <View
                  style={{
                    backgroundColor: item.colorresult,
                    paddingVertical: 2,
                    borderRadius: 5,
                    flex: 1,
                    marginLeft: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 8,
                      fontFamily: font.nunitoregular,
                      fontWeight: '600',
                      paddingTop: 2,
                      color: color.color_white,
                      textAlign: 'center',
                    }}>
                    {item.result}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: font.nunitoregular,
                  fontWeight: '600',
                  paddingTop: 5,
                  color: color.color_limit,
                  textAlign: 'center',
                  paddingLeft: 25,
                }}>
                LTP
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: font.nunitoregular,
                  fontWeight: '600',
                  color: color.color_black,
                  textAlign: 'center',
                  paddingLeft: 25,
                }}>
                {item.ltp}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Executed;

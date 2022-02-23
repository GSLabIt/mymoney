import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {font} from '../../common/Font';
import {color} from '../../common/color';

const Booked = () => {
  const DATA = [
    {
      qty: '01',
      bankname: 'AXISBANK',
      limit: 'Avg. 2095.00',
      prise: '+217.95 (+2.20%)',
      result: '10200.00',
      ltp: '2126.20',
      colorstatus: color.color_green,
      colorresult: color.color_green,
    },
  ];

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
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
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'column', flex: 1}}>
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: font.nunitoregular,
                  fontWeight: '600',
                  color: color.color_limit,
                  paddingLeft: 5,
                }}>
                QTY:{item.qty}
              </Text>

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
                Profit
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: font.nunitoregular,
                  fontWeight: '600',
                  textAlign: 'center',
                  color: item.colorresult,
                }}>
                {item.prise}
              </Text>
            </View>
            <View style={{flexDirection: 'column', flex: 1}}>
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: font.nunitoregular,
                  fontWeight: '600',
                  paddingTop: 5,
                  color: color.color_limit,
                  textAlign: 'center',
                  paddingLeft: 25,
                  paddingTop: 15,
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
      <View
        style={{
          justifyContent: 'flex-end',
          paddingHorizontal: 15,
          borderTopColor: color.color_gray,
          borderTopWidth: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: 12,
                color: color.color_gray,
                fontFamily: font.nunitoregular,
              }}>
              Invested
            </Text>
            <Text style={{fontSize: 12, color: color.color_black}}>
              30200.00
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: 12,
                color: color.color_gray,
                textAlign: 'center',
              }}>
              Current
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: color.color_green,
                fontFamily: font.nunitoregular,
              }}>
              +30700.05
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: color.color_gray,
            borderBottomWidth: 1,
            paddingTop: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: color.color_gray,
              fontFamily: font.nunitoregular,
            }}>
            {'Today P&L'}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: color.color_green,
              fontFamily: font.nunitoregular,
            }}>
            +217.95 +2.20%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Booked;

const styles = StyleSheet.create({});

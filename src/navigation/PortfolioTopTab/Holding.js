import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {font} from '../../common/Font';
import {color} from '../../common/color';

const Holding = () => {
  const DATA = [
    {
      qty: '1',
      bankname: 'AXISBANK',
      limit: 'Avg. 2095.00',
      prise: '+217.95 (+2.20%)',
      result: '10200.00',
      ltp: '20000 .00',
      colorstatus: color.color_green,
      colorresult: color.color_green,
    },
    {
      qty: '10',
      bankname: 'CADILA',
      limit: 'Avg. 254.00',
      prise: '-150.00 (+0.20%)',
      result: '20000 .00',
      ltp: '250.20',
      colorstatus: color.color_green,
      colorresult: color.color_red,
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
              <View style={{flexDirection: 'row', flex: 1}}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    fontWeight: '600',
                    color: color.color_limit,
                    alignSelf: 'center',
                  }}>
                  Invested
                </Text>
                <View
                  style={{
                    backgroundColor: item.colorstatus,
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

export default Holding;

const styles = StyleSheet.create({});

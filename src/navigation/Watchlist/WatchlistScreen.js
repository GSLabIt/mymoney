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
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { font } from '../../common/Font';
import { color } from '../../common/color';
import Drawer from '../../../assets/svg/drawer';
import CustomSearch from '../../component/CustomSearchview/CustomSearch';
import Bell from '../../../assets/svg/bell';
import WatchListTopTab from '../watchlisttoptab/WatchListTopTab';
import { LineChart } from 'react-native-chart-kit';
import Reliance from '../../../assets/svg/reliance';
import Cadila from '../../../assets/svg/cadila';
import Axis from "../../../assets/svg/axis";
import Parle from '../../../assets/svg/parle';
import Hdfc from '../../../assets/svg/hdfc';
import Yes from '../../../assets/svg/yes';

const WatchlistScreen = ({ navigation }) => {
  const DATA = [
    {
      icon: <Axis />,
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
      icon: <Yes />,
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
      icon: <Hdfc />,
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
      icon: <Parle />,
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
  ];

  const MOSTDATA = [
    {
      icon: <Reliance />,
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
      icon: <Cadila />,
      bankname: 'CADILA',
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
      icon: <Reliance />,
      bankname: 'HDFCBANK',
      nse: 'NSE',
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
      icon: <Reliance />,
      bankname: 'ICICI BANK',
      nse: 'NSE',
      prise: '451.20',
      result: '+59.20 (',
      ltp: '+2.50%',
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
      icon: <Cadila />,
      bankname: 'TCS',
      nse: 'NSE',
      prise: '1458.02',
      result: '-35.10 (',
      ltp: '-1.48%',
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
      <ScrollView>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity
            style={{ paddingLeft: 20, paddingRight: 15, paddingTop: 15 }}
            onPress={() => navigation.openDrawer()}>
            <Drawer />
          </TouchableOpacity>
          <View style={{ flex: 1, marginRight: 10 }}>
            <CustomSearch />
          </View>
        </View>
        <TouchableOpacity
          style={{ alignSelf: 'flex-end', paddingRight: 15, paddingTop: 10 }}
          onPress={() => navigation.navigate('NotificationScreen')}>
          <Bell />
        </TouchableOpacity>
        <View style={{ height: '23%' }}>
          <WatchListTopTab />
        </View>

        <View
          style={{
            backgroundColor: color.color_white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 15,
            marginBottom: 250,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: font.nunitobold,
                color: color.color_black,
              }}>
              Stocks
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: font.nunitoregular,
                color: color.color_darkblue,
              }}
              onPress={() => navigation.navigate('SeeAll')}>
              See All
            </Text>
          </View>

          <FlatList
            data={DATA}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  backgroundColor: color.color_lightblue,
                  borderRadius: 12,
                  flexDirection: 'row',
                  marginTop: 10,
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }} onPress={() => navigation.navigate("BankDetails")}>

                <View style={{ alignSelf: 'center' }}>{item.icon}</View>
                <View
                  style={{ flexDirection: 'column', flex: 1, paddingLeft: 10, alignSelf: "center" }}>
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

                <View style={{ flexDirection: 'column' }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: font.nunitoregular,
                      fontWeight: '600',
                      paddingTop: 2,
                      color: item.colorstatus,
                      textAlign: 'center',
                      alignSelf: "flex-end"
                    }}>
                    {item.prise}
                  </Text>

                  <View style={{ flexDirection: 'row' }}>
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
          <View
            style={{
              borderBottomColor: color.color_gray,
              borderBottomWidth: 1,
              paddingTop: 20,
              flex: 1,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: font.nunitobold,
                color: color.color_black,
              }}>
              Most Active Stock
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: font.nunitoregular,
                color: color.color_darkblue,
              }}>
              See All
            </Text>
          </View>
          <FlatList
            data={MOSTDATA}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  backgroundColor: color.color_lightblue,
                  borderRadius: 12,
                  flexDirection: 'row',
                  marginTop: 10,
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }} onPress={() => navigation.navigate("BankDetails")}>
                <View style={{ alignSelf: 'center' }}>{item.icon}</View>
                <View
                  style={{ flexDirection: 'column', flex: 1, paddingLeft: 10, alignSelf: "center" }}>
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

                <View style={{ flexDirection: 'column' }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: font.nunitoregular,
                      fontWeight: '600',
                      paddingTop: 2,
                      color: item.colorstatus,
                      textAlign: 'center',
                      alignSelf: "flex-end"
                    }}>
                    {item.prise}
                  </Text>

                  <View style={{ flexDirection: 'row' }}>
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

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: font.nunitobold,
                color: color.color_black,
              }}>
              Recent Visited Stocks
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: font.nunitoregular,
                color: color.color_darkblue,
              }}>
              See All
            </Text>
          </View>

          <View
            style={{
              backgroundColor: color.color_lightblue,
              borderRadius: 12,
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-around',
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginBottom: 30,
            }}>
            <View
              style={{
                height: '100%',
                width: 2,
                backgroundColor: color.color_red,
              }}
            />
            <View style={{ flexDirection: 'column', paddingLeft: 5 }}>
              <Text
                style={{
                  fontSize: 9,
                  color: color.color_black,
                  fontFamily: font.montserratregular,
                }}>
                TCS
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: color.color_red,
                  fontFamily: font.montserratregular,
                }}>
                215.15
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    color: color.color_black,
                  }}>
                  +13.00(
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    color: color.color_red,
                  }}>
                  +0.14%
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    color: color.color_black,
                  }}>
                  )
                </Text>
              </View>
            </View>

            <View
              style={{
                height: '100%',
                width: 2,
                backgroundColor: color.color_green,
              }}
            />
            <View style={{ flexDirection: 'column', paddingLeft: 5 }}>
              <Text
                style={{
                  fontSize: 9,
                  color: color.color_black,
                  fontFamily: font.montserratregular,
                }}>
                WIPRO
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: color.color_green,
                  fontFamily: font.montserratregular,
                }}>
                456.40
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    color: color.color_black,
                  }}>
                  +13.00(
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    color: color.color_green,
                  }}>
                  +0.01%
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    color: color.color_black,
                  }}>
                  )
                </Text>
              </View>
            </View>

            <View
              style={{
                height: '100%',
                width: 2,
                backgroundColor: color.color_green,
              }}
            />
            <View style={{ flexDirection: 'column', paddingLeft: 5 }}>
              <Text
                style={{
                  fontSize: 9,
                  color: color.color_black,
                  fontFamily: font.montserratregular,
                }}>
                SUNPHARMA
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: color.color_green,
                  fontFamily: font.montserratregular,
                }}>
                895.78
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    color: color.color_black,
                  }}>
                  +52.00(
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    color: color.color_green,
                  }}>
                  +2.52%
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    color: color.color_black,
                  }}>
                  )
                </Text>
              </View>
            </View>

            <View
              style={{
                height: '100%',
                width: 2,
                backgroundColor: color.color_red,
              }}
            />
            <View style={{ flexDirection: 'column', paddingLeft: 5 }}>
              <Text
                style={{
                  fontSize: 9,
                  color: color.color_black,
                  fontFamily: font.montserratregular,
                }}>
                CIPLA
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: color.color_red,
                  fontFamily: font.montserratregular,
                }}>
                1454.78
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    color: color.color_black,
                  }}>
                  +15.00(
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    color: color.color_red,
                  }}>
                  +5.52%
                </Text>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: font.nunitoregular,
                    color: color.color_black,
                  }}>
                  )
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WatchlistScreen;

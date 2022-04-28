import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { font } from '../../common/Font';
import { color } from '../../common/color';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Year = () => {
  const data = {
    datasets: [
      {
        data: [5, 30, 15, 50, 10, 20, 35, 50, 10, 30, 20, 25, 40, 50, 25],

      },
    ],
  };

  return (
    <View style={{}}>
      <View style={{ alignSelf: 'center' }}>
        <Text
          style={{
            color: color.color_black,
            fontSize: 28,
            fontFamily: font.nunitoregular,
            fontWeight: '600',
            textAlign: 'center',
          }}>
          NIFTY 50
        </Text>
        <Text
          style={{
            color: color.color_green,
            fontSize: 32,
            fontFamily: font.nunitobold,
            textAlign: 'center',
          }}>
          24,825.90
        </Text>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text
            style={{
              color: color.color_black,
              fontSize: 15,
              fontFamily: font.nunitoregular,
              textAlign: 'center',
            }}>
            +13.00 (
          </Text>
          <Text
            style={{
              color: color.color_green,
              fontSize: 15,
              fontFamily: font.nunitoregular,
              textAlign: 'center',
            }}>
            +0.14%
          </Text>
          <Text
            style={{
              color: color.color_black,
              fontSize: 15,
              fontFamily: font.nunitoregular,
              textAlign: 'center',
            }}>
            )
          </Text>
        </View>
      </View>
      <View style={{ position: 'absolute', top: 120, right: 30 }}>
        <LineChart
          data={data}
          width={screenWidth}
          height={120}
          withDots={false}
          withInnerLines={false}
          withOuterLines={false}
          withShadow={false}
          withHorizontalLabels={false}
          chartConfig={{
            backgroundColor: '#EDF1F9',
            backgroundGradientFrom: '#EDF1F9',
            backgroundGradientTo: '#EDF1F9',

            color: (opacity = 0) => '#219653',
          }}
          bezier
        />
      </View>
    </View>
  );
};

export default Year;

const styles = StyleSheet.create({});

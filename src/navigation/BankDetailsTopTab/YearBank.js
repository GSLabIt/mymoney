import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { font } from '../../common/Font';
import { color } from '../../common/color';
import { LineChart } from 'react-native-chart-kit';
import {
  VictoryBar,
  VictoryAxis,
  VictoryChart,
  VictoryTheme,
  VictoryCandlestick,
  VictoryLine,
} from 'victory-native';
import useStore from '../../../store';

const screenWidth = Dimensions.get('window').width;

const YearBank = () => {
  const { isshow } = useStore();
  const data = [
    { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
    { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
    { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
    { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
    { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 },
    { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
    { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
    { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
    { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
    { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 },
    { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
    { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
    { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
    { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
    { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 },
    { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
    { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
    { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
    { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
    { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 },
    { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
    { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
    { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
    { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
    { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 },
    { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
    { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
  ];

  return (
    <View style={{ top: -40 }}>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 25 }}
        scale={{ x: 'time' }}>
        <VictoryAxis tickFormat={t => `${t.getDate()}/${t.getMonth()}`} />
        <VictoryAxis dependentAxis />

        {!isshow ? (
          <VictoryCandlestick
            candleColors={{
              positive: color.color_green,
              negative: color.color_red,
            }}
            data={data}
          />
        ) : (
          <>
            <VictoryLine
              samples={100}
              style={{ data: { stroke: 'green' } }}
              y={d => Math.sin(4 * Math.PI * d.x)}
            />

            <VictoryLine
              samples={100}
              style={{ data: { stroke: 'red' } }}
              y={d => Math.cos(2 * Math.PI * d.x)}
            />
          </>
        )}
      </VictoryChart>


    </View>
  );
};

export default YearBank;

const styles = StyleSheet.create({});

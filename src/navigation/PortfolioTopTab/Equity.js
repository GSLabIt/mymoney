import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../common/color';
import PortfolioInnerTab from './PortfolioInnerTab';

const Equity = () => {
  return (
    <View style={{backgroundColor: color.color_white, flex: 1}}>
      <PortfolioInnerTab />
    </View>
  );
};

export default Equity;

const styles = StyleSheet.create({});

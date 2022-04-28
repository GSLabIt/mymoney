import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from '../../../common/color';

const HorizontalSeperator = () => {
  return <View style={styles.seperatorLine} />;
};

export default memo(HorizontalSeperator);

const styles = StyleSheet.create({
  seperatorLine: {
    height: 0.6,
    paddingTop:2,
    backgroundColor: color.color_bankhorizontal,
  },
});

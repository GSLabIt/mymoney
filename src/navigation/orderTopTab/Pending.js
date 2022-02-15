import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pendingimage from '../../../assets/svg/pendingimage';

const Pending = () => {
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Pendingimage />
      </View>
    </View>
  );
};

export default Pending;

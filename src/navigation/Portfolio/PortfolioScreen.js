import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ColorPropType,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Drawer from '../../../assets/svg/drawer';
import CustomSearch from '../../component/CustomSearchview/CustomSearch';
import Portfoliotop from '../PortfolioTopTab/portfoliotop';

const PortfolioScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity
          style={{paddingLeft: 20, paddingRight: 15, paddingTop: 15}}
          onPress={() => navigation.openDrawer()}>
          <Drawer />
        </TouchableOpacity>
        <View style={{flex: 1, marginRight: 10}}>
          <CustomSearch />
        </View>
      </View>
      <View style={{ flex: 1}}>
        <Portfoliotop />
      </View>
    </SafeAreaView>
  );
};

export default PortfolioScreen;

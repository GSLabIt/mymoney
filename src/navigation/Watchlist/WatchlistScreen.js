import {View, Text} from 'react-native';
import CustomButton from '../../component/buttons/CustomButton';

import React from 'react';
// import {used} from "@react-navigation/native"

const WatchlistScreen = ({ navigation }) => {
  return (
    <View>
      <Text>WatchlistScreen</Text>

      <CustomButton textname="Save" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default WatchlistScreen;

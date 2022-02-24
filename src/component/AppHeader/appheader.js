import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Back from '../../../assets/svg/back';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import {styles} from './styles';

const appheader = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onPress}
        style={{alignSelf: 'center', paddingTop: 10,paddingLeft:15}}>
        <Back />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.header}</Text>
    </View>
  );
};

export default appheader;

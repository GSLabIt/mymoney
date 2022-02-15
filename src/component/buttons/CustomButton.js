import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import {styles} from './styles';

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.textname}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

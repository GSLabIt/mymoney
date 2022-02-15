import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Eye from '../../../assets/svg/eye';
import {styles} from './styles';

const CustomTextinput = props => {
  return (
    <View style={styles.container}>
      <View style={styles.subview}>
        <props.svg />
      </View>

      <TextInput
        style={styles.textinput}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        defaultValue={props.defaultValue}
        underlineColorAndroid={color.color_gray}
        placeholderTextColor={color.color_placeholder}
      />
      <View style={styles.eyeview}>
        <Eye />
      </View>
    </View>
  );
};

export default CustomTextinput;

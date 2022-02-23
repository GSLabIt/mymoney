import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {font} from '../../common/Font';
import {color} from '../../common/color';
import ModalDropdown from 'react-native-modal-dropdown';

const CustomDropDown = (props) => {
  return (
    <ModalDropdown
    options={props.ModalValue}
    defaultValue={props.DefaultValue}
    style={{width: 50}}
    dropdownStyle={{height: 120}}
    textStyle={{
      fontSize: 13,
      fontFamily: font.nunitobold,
      color: color.color_black,
    }}
    dropdownTextStyle={{
      fontSize: 13,
      fontFamily: font.nunitobold,
      color: color.color_black,
    }}
  />
  )
}

export default CustomDropDown


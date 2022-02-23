import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pendingimage from '../../../assets/svg/pendingimage';
import {color} from '../../common/color';

const Current = () => {
  return (
    <View style={{backgroundColor:color.color_white, flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Pendingimage />
      </View>
    </View>
  )
}

export default Current

const styles = StyleSheet.create({})
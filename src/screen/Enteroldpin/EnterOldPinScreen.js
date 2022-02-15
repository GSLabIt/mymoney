import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import NumberPad from '../../component/NumberPad/NumberPad';
import {styles} from './styles';
import Appheader from '../../component/AppHeader/appheader';

const EnterOldPinScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <Appheader
      onPress={() => navigation.goBack()}
      header="Enter Old Pin"
    />
    <NumberPad
      textfield="Please enter your PIN to Proceed"
      accountText="If You Forget Your PIN?"
      pinText=" Reset PIN"
      onbutton={() => navigation.navigate('EnterNewPinScreen')}
      onPress={() => navigation.navigate('SecurityForgotPin')}
  
    />
  </SafeAreaView>
  )
}

export default EnterOldPinScreen;


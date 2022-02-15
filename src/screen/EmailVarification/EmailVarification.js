import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import NumberPad from '../../component/NumberPad/NumberPad';
import {styles} from './styles';
import Appheader from '../../component/AppHeader/appheader';

const EmailVarification = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appheader
        onPress={() => navigation.goBack()}
        header="Email Verification"
      />
      <NumberPad
        textfield="Please enter the 4-digit code send to you at test001@gmail.com"
        accountText="If You Didn’t Received Code?"
        pinText="Resend Code"
        onbutton={() => navigation.navigate('CreatePinScreen')}
      />
    </SafeAreaView>
  );
};

export default EmailVarification;

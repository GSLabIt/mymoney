import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import NumberPad from '../../component/NumberPad/NumberPad';
import {styles} from './styles';
import Appheader from '../../component/AppHeader/appheader';

const VerificationPinScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appheader
        onPress={() => navigation.goBack()}
        header="Verification PIN"
      />
      <NumberPad
        textfield="Please enter your PIN to Proceed"
        accountText="If You Forget Your PIN? "
        pinText="Reset PIN"
        onPress={() => navigation.navigate('ForgotPinScreen')}
          onbutton={() => navigation.navigate('Tabstack')}
      />
    </SafeAreaView>
  );
};

export default VerificationPinScreen;

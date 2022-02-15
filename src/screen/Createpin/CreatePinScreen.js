import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import NumberPad from '../../component/NumberPad/NumberPad';
import {styles} from './styles';
import Appheader from '../../component/AppHeader/appheader';

const CreatePinScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appheader onPress={() => navigation.goBack()} header="Create a PIN" />
      <NumberPad textfield="Enhance the security of your account by creating a PIN code" 
      onbutton={() => navigation.navigate('ConformPinscreen')}
      />
    </SafeAreaView>
  );
};

export default CreatePinScreen;

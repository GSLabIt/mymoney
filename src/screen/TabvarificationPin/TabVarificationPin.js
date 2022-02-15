import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../common/color';
import {font} from '../../common/Font';
import NumberPad from '../../component/NumberPad/NumberPad';
import {styles} from './styles';
import Appheader from '../../component/AppHeader/appheader';
import * as Progress from 'react-native-progress';

const TabVarificationPin = ({navigation}) => {
    const [value, setValue] = useState('0.8');
  return (
    <SafeAreaView style={styles.container}>
      <Appheader
        onPress={() => navigation.goBack()}
        header="Verification PIN"
      />
      <View style={{marginTop:-10,marginBottom:10}}>
       <Progress.Bar
            progress={value}
            width={220}
            color={color.color_darkblue}
            unfilledColor={color.color_progressblue}
            borderWidth={0.2}
           
            style={{alignSelf: 'center'}}
          />
          </View>
        
      <NumberPad
        textfield="Please enter your PIN to Proceed"
        accountText="If You Forget Your PIN? "
        pinText="Reset PIN"
        onPress={() => navigation.navigate('WellDone')}
          onbutton={() => navigation.navigate('WellDone'
            )}
      />
     
    </SafeAreaView>
  );
};

export default TabVarificationPin;
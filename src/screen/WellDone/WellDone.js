import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Appheader from '../../component/AppHeader/appheader';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import CustomButton from '../../component/buttons/CustomButton';
import * as Progress from 'react-native-progress';
import Number from '../../../assets/svg/number';
import Welldone from '../../../assets/svg/welldone';

const WellDone = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 20, paddingHorizontal: 20, flex: 1,marginBottom:20}}>
        <Text style={styles.login}>Well Done!</Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            fontFamily: font.nunitoregular,
            fontWeight: 'normal',
            color: color.color_lightblack,
          }}>
          Your Phonw number is now being reviewed. You can expect it to finish
          in the next 24 hours
        </Text>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Welldone />
        </View>
        
        <CustomButton
              textname="Back to Profile"
              onPress={() => navigation.navigate('Tabstack')}
            />
      </View>
    </SafeAreaView>
  );
};

export default WellDone;

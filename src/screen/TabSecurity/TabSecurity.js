import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Appheader from '../../component/AppHeader/appheader';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import CustomButton from '../../component/buttons/CustomButton';
import Security from '../../../assets/svg/security';
import Right from '../../../assets/svg/right';

const TabSecurity = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appheader onPress={() => navigation.goBack()} header="Security" />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={{alignSelf: 'center'}}>
          <Security />
        </View>
        <View style={styles.subview}>
          <TouchableOpacity style={styles.touchview} onPress={() => {
              navigation.navigate('TabChangePassword');
            }}>
            <Text style={styles.touchText}>Change Password</Text>
            <Right />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchview} onPress={() => {
              navigation.navigate('EnterOldPinScreen');
            }}>
            <Text style={styles.touchText}>Change PIN</Text>
            <Right />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabSecurity;

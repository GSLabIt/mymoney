import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {color} from '../../common/color';
import {font} from '../../common/Font';
import Right from '../../../assets/svg/right';

const AccountScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.subview}>
          <View style={styles.imageview}>
            <Image source={require('../../../assets/Image/User.png')} />
          </View>
          <Text style={styles.firsttext}>Mattie Hardwick</Text>
          <TouchableOpacity style={styles.touchview} onPress={() => {
              navigation.navigate('InformationScreen');
            }}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '600',
                color: color.color_lightblack,
                fontFamily: font.nunitoregular,
              }}>
              Personal information
            </Text>
            <Right />
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchview}  onPress={() => {
              navigation.navigate('VerifyNumberScreen');
            }}>
            <Text style={styles.touchText}>Phone number verification</Text>
            <Right />
          </TouchableOpacity>

          <Text style={styles.settingtext}>Settings</Text>

          <TouchableOpacity style={styles.touchview} onPress={() => {
              navigation.navigate('TabSecurity');
            }}>
            <Text style={styles.touchText}>Security</Text>
            <Right />
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchview}>
            <Text style={styles.touchText}>{'Help & Support'}</Text>
            <Right />
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.touchview} >
            <Text style={styles.touchText}>Legaly</Text>
            <Right />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

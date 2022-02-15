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

const VerifyNumberScreen = ({navigation}) => {
  const [value, setValue] = useState('0.2');
  const [number, setNumber] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <Appheader onPress={() => navigation.goBack()} header="Verify Number" />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={{paddingLeft: 10, paddingRight: 10}}>
          <Progress.Bar
            progress={value}
            width={220}
            color={color.color_darkblue}
            unfilledColor={color.color_progressblue}
            borderWidth={0.2}
            
            style={{alignSelf: 'center'}}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              fontWeight: font.nunitoregular,
              color: color.color_gettext,
              paddingTop: 20,
            }}>
            Please enter your country and your phone number to receive a
            verification code
          </Text>
          <View style={styles.imageview}>
            <Image source={require('../../../assets/Image/verify.png')} />
          </View>
        </View>
        <View style={styles.subview}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,

              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: color.color_Verify,
              borderRadius: 15,
              borderColor: color.color_numberborder,
            }}>
            <Text style={{alignSelf: 'center'}}>+218</Text>
            <View style={styles.verticleLine}></View>
            <TextInput
              placeholder="Enter Mobile Number"
              onChangeText={setNumber}
              value={number}
              style={{
                fontSize: 12,
                flex: 1,
                fontFamily: font.nunitoregular,
                paddingLeft: 10,
              }}
              placeholderTextColor={color.color_placeholder}
              keyboardType="numeric"
            />
            <View style={{alignSelf: 'center'}}>
              <Number />
            </View>
          </View>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              color: color.color_verifynumber,
              paddingTop: 20,
            }}>
            By continuing, I confirm that i have read & agree to the
          </Text>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                color: color.color_black,
              }}>
              Terms & conditions
            </Text>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                color: color.color_verifynumber,
              }}>
              {' '}
              and
            </Text>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                color: color.color_black,
              }}>
              {' '}
              Privacy policy
            </Text>
          </View>

          <View style={{justifyContent: 'flex-end', flex: 1, marginTop: 70}}>
            <CustomButton
              textname="Submit"
              onPress={() => {
                navigation.navigate('TabVarificationPin'), setValue('0.5');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyNumberScreen;

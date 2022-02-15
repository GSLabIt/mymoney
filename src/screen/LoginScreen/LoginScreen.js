import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Loginlogo from '../../../assets/svg/loginlogo';
import Email from '../../../assets/svg/email';
import Password from '../../../assets/svg/password';
import CheckBox from '@react-native-community/checkbox';

import CustomTextinput from '../../component/TextInput/CustomTextinput';
import CustomButton from '../../component/buttons/CustomButton';

const LoginScreen = ({props, navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.mainview}>
          <Text style={styles.login}>Login</Text>
          <View style={{marginTop: 20}}>
            <Loginlogo />
          </View>
        </View>
        <View style={styles.subview}>
          <CustomTextinput
            placeholder="Email"
            onChangeText={newText => setEmail(newText)}
            defaultValue={email}
            svg={Email}
          />
          <CustomTextinput
            placeholder="Password"
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
            svg={Password}
          />

          <View style={styles.checkboxview}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />

            <Text
              style={{
                flex: 1,
                alignSelf: 'center',
                fontFamily: font.montserratregular,
                color: color.color_black,
              }}>
              Remember me
            </Text>
            <Text
              style={styles.forgot}
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              Forgot Password?
            </Text>
          </View>

          <View style={styles.subcontainer}>
            <CustomButton
              textname="Log In"
              onPress={() => navigation.navigate('VerificationPinScreen')}
            />
            <View style={styles.accountview}>
              <Text style={styles.account}>Don’t have an account? </Text>
              <Text
                style={styles.signup}
                onPress={() => {
                  navigation.navigate('SignUpScreen');
                }}>
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

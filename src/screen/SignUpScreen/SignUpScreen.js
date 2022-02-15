import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Email from '../../../assets/svg/email';
import Password from '../../../assets/svg/password';
import CustomTextinput from '../../component/TextInput/CustomTextinput';
import CustomButton from '../../component/buttons/CustomButton';
import Appheader from '../../component/AppHeader/appheader';
import Signup from '../../../assets/svg/signup';
import User from '../../../assets/svg/user';

const SignUpScreen = ({props, navigation}) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Appheader
        onPress={() => navigation.navigate('LoginScreen')}
        header="Create Account"
      />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.mainview}>
          <View style={{marginTop: 20}}>
            <Signup />
          </View>
        </View>
        <View style={styles.subview}>
          <CustomTextinput
            placeholder="FirstName"
            onChangeText={newText => setFirstName(newText)}
            defaultValue={firstname}
            svg={User}
          />
          <CustomTextinput
            placeholder="LastName"
            onChangeText={newText => setLastName(newText)}
            defaultValue={lastname}
            svg={User}
          />
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
          <View style={styles.subcontainer}>
            <CustomButton
              textname="Sign Up"
              onPress={() => navigation.navigate('NumberPad')}
            />
            <View style={styles.accountview}>
              <Text style={styles.account}>Already have an account? </Text>
              <Text
                style={styles.signup}
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}>
                Login
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

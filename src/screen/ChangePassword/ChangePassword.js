import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Appheader from '../../component/AppHeader/appheader';
import CustomTextinput from '../../component/TextInput/CustomTextinput';
import CustomButton from '../../component/buttons/CustomButton';
import Eye from '../../../assets/svg/eye';
import {color} from '../../common/color';

const ChangePassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Appheader onPress={() => navigation.goBack()} header="Change Password" />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.subview}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="New password"
              onChangeText={setEmail}
              value={email}
              underlineColorAndroid={color.color_gray}
              placeholderTextColor={color.color_placeholder}
              style={{flex: 1}}
            />
            <View style={styles.eyeview}>
              <Eye />
            </View>
          </View>

          <View style={{flexDirection: 'row', paddingTop: 20}}>
            <TextInput
              placeholder="Repeat password"
              onChangeText={setPassword}
              value={password}
              underlineColorAndroid={color.color_gray}
              placeholderTextColor={color.color_placeholder}
              style={{flex: 1}}
            />
            <View style={styles.eyeview}>
              <Eye />
            </View>
          </View>

          <View style={{marginTop: 50}}>
            <CustomButton
              textname="Change Password"
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;

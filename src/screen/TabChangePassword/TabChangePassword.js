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

const TabChangePassword = ({navigation}) => {
  const [currentpassword, setNewcurrent] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [repeatpassword, setRepeatPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Appheader onPress={() => navigation.goBack()} header="Change Password" />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.subview}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Current password"
              onChangeText={setNewcurrent}
              value={currentpassword}
              underlineColorAndroid={color.color_gray}
              placeholderTextColor={color.color_placeholder}
              style={{flex: 1, color: color.color_secureentry}}
            />
            <View style={styles.eyeview}>
              <Eye />
            </View>
          </View>

          <View style={{flexDirection: 'row', paddingTop: 20}}>
            <TextInput
              placeholder="New password"
              onChangeText={setNewPassword}
              value={newpassword}
              underlineColorAndroid={color.color_gray}
              placeholderTextColor={color.color_placeholder}
              style={{flex: 1, color: color.color_secureentry}}
            />
            <View style={styles.eyeview}>
              <Eye />
            </View>
          </View>

          <View style={{flexDirection: 'row', paddingTop: 20}}>
            <TextInput
              placeholder="Repeat password"
              onChangeText={setRepeatPassword}
              value={repeatpassword}
              underlineColorAndroid={color.color_gray}
              placeholderTextColor={color.color_placeholder}
              style={{flex: 1, color: color.color_secureentry}}
              secureTextEntry={true}
            />
            <View style={styles.eyeview}>
              <Eye />
            </View>
          </View>

          <View style={{marginTop: 50}}>
            <CustomButton
              textname="Change Password"
              onPress={() => navigation.navigate('SecurityWellDone')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabChangePassword;

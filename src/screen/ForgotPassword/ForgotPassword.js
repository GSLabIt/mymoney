import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Appheader from '../../component/AppHeader/appheader';
import Forgotimage from '../../../assets/svg/forgotimage';
import CustomTextinput from '../../component/TextInput/CustomTextinput';
import Email from '../../../assets/svg/email';
import CustomButton from '../../component/buttons/CustomButton';
import {font} from '../../common/Font';
import {color} from '../../common/color';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Appheader onPress={() => navigation.goBack()} header="Forgot Password" />
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.mainview}>
          <Text style={styles.forgot}>
            Enter your registrated email address to receive password reset
            instruction
          </Text>
          <View style={{marginTop: 20}}>
            <Forgotimage />
          </View>
        </View>
        <View style={styles.subview}>
          <CustomTextinput
            placeholder="Email"
            onChangeText={newText => setEmail(newText)}
            defaultValue={email}
            svg={Email}
          />
          <View style={styles.subcontainer}>
            <CustomButton
              textname="Reset Password"
              onPress={() => navigation.navigate('EmailPasswordchange')}
            />
            <Text
              style={{
                textAlign: 'center',
                fontFamily: font.nunitoregular,
                fontSize: 15,
                fontWeight: '600',
                color: color.color_black,
                paddingTop: 15,
              }}>
              {'Terms & Condition Apply'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ForgotPassword;

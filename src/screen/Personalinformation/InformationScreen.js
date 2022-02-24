import {View, Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Appheader from '../../component/AppHeader/appheader';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import CustomButton from '../../component/buttons/CustomButton';

const InformationScreen = ({navigation}) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [citizenship, setcitizenship] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Appheader
        onPress={() => navigation.goBack()}
        header="Personal Information"
      />

      <ScrollView contentContainerStyle={styles.scrollview}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            fontFamily: font.nunitoregular,
            paddingLeft: 15,
            paddingRight: 15,
            color: color.color_gettext,
          }}>
          We get your personal information from the verification process. If you
          want to make changes on your personal information, contact our
          support.
        </Text>
        <View style={styles.subview}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              fontFamily: font.nunitoregular,
              color: color.color_lightblack,
              paddingTop: 10,
            }}>
            First name
          </Text>
          <TextInput
            placeholder="Mattie"
            onChangeText={setFirstName}
            value={firstname}
            underlineColorAndroid={color.color_gray}
            placeholderTextColor={color.color_lightblack}
            style={{fontSize: 19, color: color.color_lightblack}}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              fontFamily: font.nunitoregular,
              color: color.color_lightblack,
              paddingTop: 10,
            }}>
            Last name
          </Text>
          <TextInput
            placeholder="Hardwick"
            onChangeText={setLastName}
            value={lastname}
            underlineColorAndroid={color.color_gray}
            placeholderTextColor={color.color_lightblack}
            style={{fontSize: 19, color: color.color_lightblack}}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              fontFamily: font.nunitoregular,
              color: color.color_lightblack,
              paddingTop: 10,
            }}>
            Street address
          </Text>
          <TextInput
            placeholder="74  Monroe Avenue"
            onChangeText={setAddress}
            value={address}
            underlineColorAndroid={color.color_gray}
            placeholderTextColor={color.color_lightblack}
            style={{fontSize: 19, color: color.color_lightblack}}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              fontFamily: font.nunitoregular,
              color: color.color_lightblack,
              paddingTop: 10,
            }}>
            City
          </Text>
          <TextInput
            placeholder="Fort Myers"
            onChangeText={setCity}
            value={city}
            underlineColorAndroid={color.color_gray}
            placeholderTextColor={color.color_lightblack}
            style={{fontSize: 19, color: color.color_lightblack}}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              fontFamily: font.nunitoregular,
              color: color.color_lightblack,
              paddingTop: 10,
            }}>
            ZIP/Area code
          </Text>
          <TextInput
            placeholder="395010"
            onChangeText={setZipcode}
            value={zipcode}
            underlineColorAndroid={color.color_gray}
            placeholderTextColor={color.color_lightblack}
            style={{fontSize: 19, color: color.color_lightblack}}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              fontFamily: font.nunitoregular,
              color: color.color_lightblack,
              paddingTop: 10,
            }}>
            Citizenship
          </Text>
          <TextInput
            placeholder="India"
            onChangeText={setcitizenship}
            value={citizenship}
            underlineColorAndroid={color.color_gray}
            placeholderTextColor={color.color_lightblack}
            style={{fontSize: 19, color: color.color_lightblack}}
          />
          <View style={{marginTop: 50}}>
            <CustomButton textname="Save" onPress={() => navigation.goBack()} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InformationScreen;

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Appheader from '../../component/AppHeader/appheader';
import Greenarrow from '../../../assets/svg/greenarrow';
import Delete from '../../../assets/svg/delete';

const NumberPad = props => {
  const [value, setvalue] = useState('');

  const name_update = value => {
    setvalue(v => {
      if (v.length <= 3) {
        return v + value;
      } else {
        return v;
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainview}>
        <Text style={styles.forgot}>{props.textfield}</Text>

        {/* otp boxes container */}
        <View style={styles.containerview}>
          {/* first otp box */}
          <View style={styles.inputtext(value.length, 0)}>
            <Text style={styles.numbertext}>{value?.split('')[0]}</Text>
          </View>

          {/* second otp box */}
          <View style={styles.inputtext(value.length, 1)}>
            <Text style={styles.numbertext}>{value?.split('')[1]}</Text>
          </View>

          {/* third otp box */}
          <View style={styles.inputtext(value.length, 2)}>
            <Text style={styles.numbertext}>{value?.split('')[2]}</Text>
          </View>

          {/* fourth otp box */}
          <View style={styles.inputtext(value.length, 3)}>
            <Text style={styles.numbertext}>{value?.split('')[3]}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonarrow} onPress={props.onbutton}>
          <Greenarrow />
        </TouchableOpacity>
        <View style={styles.accountview}>
          <Text style={styles.account}>{props.accountText} </Text>
          <Text style={styles.signup} onPress={props.onPress}>
            {props.pinText}
          </Text>
        </View>

        <View style={styles.numberview}>
          <View style={styles.numbersubview}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : color.color_lightblue,
                },
                styles.main,
              ]}
              onPress={() => name_update(1)}>
              <Text style={styles.innertext}>1</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : color.color_lightblue,
                },
                styles.main,
              ]}
              onPress={() => name_update(2)}>
              <Text style={styles.innertext}>2</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : color.color_lightblue,
                },
                styles.main,
              ]}
              onPress={() => name_update(3)}>
              <Text style={styles.innertext}>3</Text>
            </Pressable>
          </View>

          <View style={styles.numbersubview}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : color.color_lightblue,
                },
                styles.main,
              ]}
              onPress={() => name_update(4)}>
              <Text style={styles.innertext}>4</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : color.color_lightblue,
                },
                styles.main,
              ]}
              onPress={() => name_update(5)}>
              <Text style={styles.innertext}>5</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : color.color_lightblue,
                },
                styles.main,
              ]}
              onPress={() => name_update(6)}>
              <Text style={styles.innertext}>6</Text>
            </Pressable>
          </View>

          <View style={styles.numbersubview}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : color.color_lightblue,
                },
                styles.main,
              ]}
              onPress={() => name_update(7)}>
              <Text style={styles.innertext}>7</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : color.color_lightblue,
                },
                styles.main,
              ]}
              onPress={() => name_update(8)}>
              <Text style={styles.innertext}>8</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : color.color_lightblue,
                },
                styles.main,
              ]}
              onPress={() => name_update(9)}>
              <Text style={styles.innertext}>9</Text>
            </Pressable>
          </View>

          <View style={styles.numbersubview}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : color.color_lightblue,
                },
                styles.main,
              ]}
              onPress={() => name_update('.')}>
              <Text style={styles.innertext}>.</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'white' : color.color_lightblue,
                },
                styles.main,
              ]}
              onPress={() => name_update(0)}>
              <Text style={styles.innertext}>0</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                styles.main,
                {
                  backgroundColor: pressed ? 'white' : color.color_lightblue,
                  // height: 100,
                  // width: 100,
                  // backgroundColor: 'white',
                },
              ]}
              onPress={() => {
                setvalue(value => {
                  console.log(value);
                  const valueArray = value.split('');
                  console.log(value.split(''));
                  valueArray.pop();
                  console.log(valueArray.join(''));
                  return valueArray.join('');
                });
              }}>
              <Delete />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NumberPad;

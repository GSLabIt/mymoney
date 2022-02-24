import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Appheader from '../../component/AppHeader/appheader';
import Notification from '../../../assets/svg/notification';
import Axissell from '../../../assets/svg/axissell';

const NotificationScreen = ({navigation}) => {
  const DATA = [
    {
      icon: <Notification />,
      text: 'Axis Buy 2021.00 order is pending.',
      time: '9.24 Am',
    },
    {
      icon: <Axissell />,
      text: 'Axis Sell 2125.50 order is pending.',
      time: '10.00 pm',
    },
    {
      icon: <Notification />,
      text: 'Eric Holfman2 hrs ago2 hrs ago      ',
      time: '12.20 Am',
    },
    {
      icon: <Notification />,
      text: 'Justas Galaburda5 hrs ago5 hrs ago   ',
      time: '2.00 pm',
    },
    {
      icon: <Axissell />,
      text: 'Eric Holfman10 hrs ago10 hrs ago    ',
      time: '3.00 Am',
    },
    {
      icon: <Axissell />,
      text: 'Charles Patterson12 hrs ago12 hrs ago',
      time: '5.00 pm',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Appheader onPress={() => navigation.goBack()} header="Notification" />

      <FlatList
        data={DATA}
        renderItem={({item, index}) => (
          <View
            style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 5}}>
            {item.icon}
            <Text
              style={{
                alignSelf: 'center',
                flex: 1,
                fontSize: 14,
                textAlign: 'center',
                color: color.color_lightblack,
                justifyContent: 'flex-start',
              }}>
              {item.text}
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                justifyContent: 'flex-end',

                fontSize: 12,
                color: color.color_notification,
              }}>
              {item.time}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;

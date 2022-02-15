import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WatchlistScreen from './WatchlistScreen';

const WatchlistStack = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={({navigation}) => ({})}>
      <Stack.Screen
        name="WatchlistScreen"
        component={WatchlistScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default WatchlistStack;

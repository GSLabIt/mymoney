import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from './AccountScreen';
// import InformationScreen from "../../screen/Personalinformation/InformationScreen"




const AccountStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={({navigation}) => ({})}>
    <Stack.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{
        headerShown: false,
      }}
    />
     {/* <Stack.Screen
        name="InformationScreen"
        component={InformationScreen}
        options={{headerShown: false}}
      /> */}
  </Stack.Navigator>
  )
}

export default AccountStack
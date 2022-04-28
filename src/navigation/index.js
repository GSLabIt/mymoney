import { ImageComponent, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen/SplashScreen';
import LoginScreen from '../screen/LoginScreen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen/SignUpScreen';
import ForgotPassword from '../screen/ForgotPassword/ForgotPassword';
import React from 'react';
import EmailVarification from '../screen/EmailVarification/EmailVarification';
import VerificationPinScreen from '../screen/VerificationPin/VerificationPinScreen';
import ForgotPinScreen from '../screen/forgotpin/ForgotPinScreen';
import CreatePinScreen from '../screen/Createpin/CreatePinScreen';
import ConformPinscreen from '../screen/ConformPin/ConformPinscreen';
import EmailPasswordchange from '../screen/emailpasswordvarification/EmailPasswordchange';
import ChangePassword from '../screen/ChangePassword/ChangePassword';
import Tabstack from '../navigation/BottomTab/TabStack';
import DrawerRoutes from './Drawer/DrawerRoutes';
import InformationScreen from '../screen/Personalinformation/InformationScreen';
import VerifyNumberScreen from '../screen/VerifyNumber/VerifyNumberScreen';
import TabVarificationPin from '../screen/TabvarificationPin/TabVarificationPin';
import WellDone from '../screen/WellDone/WellDone';
import TabSecurity from '../screen/TabSecurity/TabSecurity';
import TabChangePassword from '../screen/TabChangePassword/TabChangePassword';
import SecurityWellDone from '../screen/SecurityWellDone/SecurityWellDone';
import EnterOldPinScreen from '../screen/Enteroldpin/EnterOldPinScreen';
import EnterNewPinScreen from '../screen/EnterNewPin/EnterNewPinScreen';
import SecurityConformPinScreen from '../screen/SecurityConformScreen/SecurityConformPinScreen';
import SecurityForgotPin from '../screen/SecurityForgotPin/SecurityForgotPin';
import SecurityEmailVarification from '../screen/SecurityEmailVarification/SecurityEmailVarification';
import NotificationScreen from '../screen/Notification/NotificationScreen';
import useStore from '../../store';
// import SeeAll from '../screen/SeeAll/SeeAll';
import BankDetails from '../screen/BankDetailsScreen/BankDetails';
import MatualFundsScreen from '../screen/MatualFunds/MatualFundsScreen';
import AllMatualFundScreen from '../screen/AllMatualFunds/AllMatualFundScreen';
import FilterShortScreen from '../screen/FilterShort/FilterShortScreen';
import AxisBankDetailsScreen from "../screen/AxisBankDetails/AxisBankDetailsScreen";
import IpoScreen from '../screen/Ipo/IpoScreen';
import BankIpoScreen from '../screen/BankIpoDetailScreen/BankIpoScreen';
import PriceAlertScreen from '../screen/CreatePriceAlert/PriceAlertScreen';
import SearchPriceAlertScreen from '../screen/SearchPriceAlertList/SearchPriceAlertScreen';
import MarginCalculatorScreen from '../screen/MarginCalculator/MarginCalculatorScreen';
import ResearchScreen from '../screen/Research/ResearchScreen';
import GoldBuyScreen from '../screen/GoldBuy/GoldBuyScreen';

export const Auth = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerificationPinScreen"
        component={VerificationPinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailVarification"
        component={EmailVarification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPinScreen"
        component={ForgotPinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePinScreen"
        component={CreatePinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConformPinscreen"
        component={ConformPinscreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailPasswordchange"
        component={EmailPasswordchange}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const MainStack = () => {
  const Stack = createNativeStackNavigator();
  const { issign } = useStore();
  return (
    <Stack.Navigator>
      {!issign ? (
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Tabstack"
          component={Tabstack}
          options={{ headerShown: false }}
        />
      )}
      <Stack.Screen
        name="InformationScreen"
        component={InformationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyNumberScreen"
        component={VerifyNumberScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabVarificationPin"
        component={TabVarificationPin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WellDone"
        component={WellDone}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabSecurity"
        component={TabSecurity}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabChangePassword"
        component={TabChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SecurityWellDone"
        component={SecurityWellDone}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EnterOldPinScreen"
        component={EnterOldPinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EnterNewPinScreen"
        component={EnterNewPinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SecurityConformPinScreen"
        component={SecurityConformPinScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SecurityForgotPin"
        component={SecurityForgotPin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SecurityEmailVarification"
        component={SecurityEmailVarification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="SeeAll"
        component={SeeAll}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="BankDetails"
        component={BankDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MatualFundsScreen"
        component={MatualFundsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AllMatualFundScreen"
        component={AllMatualFundScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FilterShortScreen"
        component={FilterShortScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AxisBankDetailsScreen"
        component={AxisBankDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IpoScreen"
        component={IpoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BankIpoScreen"
        component={BankIpoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PriceAlertScreen"
        component={PriceAlertScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchPriceAlertScreen"
        component={SearchPriceAlertScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MarginCalculatorScreen"
        component={MarginCalculatorScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResearchScreen"
        component={ResearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GoldBuyScreen"
        component={GoldBuyScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});

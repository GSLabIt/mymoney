import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import WatchlistStack from '../Watchlist/WatchlistStack';
// import OrderScreen from '../Order/OrderScreen';
import PortfolioScreen from '../Portfolio/PortfolioScreen';
import FundScreen from '../Fund/FundScreen';
import {font} from '../../common/Font';
import {color} from '../../common/color';
import Watchlist from '../../../assets/svg/watchlist';
import Order from '../../../assets/svg/order';
import Portfolio from '../../../assets/svg/portfolio';
import Fund from '../../../assets/svg/fund';
import {styles} from './styles';
import Usertab from '../../../assets/svg/usertab';
import AccountStack from '../Account/AccountStack';
import DrawerRoutes from '../Drawer/DrawerRoutes';
import DrawerOrder from '../Drawer/DrawerOrder';
import DrawerPortFolio from '../Drawer/DrawerPortFolio';

const Tabstack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.color_bottomtab,
        tabBarInactiveTintColor: color.color_bottominactive,
        tabBarLabelStyle: {
          fontWeight: '400',
          fontSize: 10,
          fontFamily: font.nunitoregular,
        },
      }}>
      <Tab.Screen
        name="DrawerRoutes"
        options={{
          tabBarIcon: ({focused}) => (
            <Watchlist
              active={
                focused ? color.color_bottomtab : color.color_bottominactive
              }
            />
          ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{
                  fontSize: 10,
                  color: focused
                    ? color.color_bottomtab
                    : color.color_bottominactive,
                }}>
                Watchlist
              </Text>
            ) : null,
        }}
        component={DrawerRoutes}
      />

      <Tab.Screen
        name="DrawerOrder"
        options={{
          tabBarIcon: ({focused}) => (
            <Order
              active={
                focused ? color.color_bottomtab : color.color_bottominactive
              }
            />
          ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{
                  fontSize: 10,
                  color: focused
                    ? color.color_bottomtab
                    : color.color_bottominactive,
                }}>
                Order
              </Text>
            ) : null,
        }}
        component={DrawerOrder}
      />
      <Tab.Screen
        name="DrawerPortFolio"
        options={{
          tabBarIcon: ({focused}) => (
            <Portfolio
              active={
                focused ? color.color_bottomtab : color.color_bottominactive
              }
            />
          ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{
                  fontSize: 10,
                  color: focused
                    ? color.color_bottomtab
                    : color.color_bottominactive,
                }}>
                Portfolio
              </Text>
            ) : null,
        }}
        component={DrawerPortFolio}
      />
      <Tab.Screen
        name="FundScreen"
        options={{
          tabBarIcon: ({focused}) => (
            <Fund
              active={
                focused ? color.color_bottomtab : color.color_bottominactive
              }
            />
          ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{
                  fontSize: 10,
                  color: focused
                    ? color.color_bottomtab
                    : color.color_bottominactive,
                }}>
                Fund
              </Text>
            ) : null,
        }}
        component={FundScreen}
      />

      <Tab.Screen
        name="AccountStack"
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
            <Usertab
              active={focused ? color.color_bottomtab : color.color_usersap}
            />
          ),
          tabBarLabel: ({focused}) =>
            focused ? (
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? color.color_bottomtab : color.color_usersap,
                }}>
                Account
              </Text>
            ) : null,
        })}
        component={AccountStack}
      />
    </Tab.Navigator>
  );
};

export default Tabstack;

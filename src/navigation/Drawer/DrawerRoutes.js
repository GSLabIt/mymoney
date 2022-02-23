import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WatchlistScreen from '../Watchlist/WatchlistScreen';
import CustomSidebarMenu from '../CustomSideBarMenu.js/CustomSidebarMenu';
import SeeAll from '../../screen/SeeAll/SeeAll';

const DrawerRoutes = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="WatchlistScreen"
        component={WatchlistScreen}
        options={{headerShown: false}}
      />
       <Drawer.Screen
        name="SeeAll"
        component={SeeAll}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;

import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WatchlistScreen from '../Watchlist/WatchlistScreen';
import CustomSidebarMenu from '../CustomSideBarMenu.js/CustomSidebarMenu';



const DrawerRoutes = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomSidebarMenu  {...props}/>}>
      <Drawer.Screen name="WatchlistScreen" component={WatchlistScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;

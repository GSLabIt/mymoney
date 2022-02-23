import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from '../CustomSideBarMenu.js/CustomSidebarMenu';
import OrderScreen from '../Order/OrderScreen';


const DrawerOrder = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomSidebarMenu  {...props}/>}>
      <Drawer.Screen name=" OrderScreen" component={ OrderScreen} options={{headerShown:false}} />
      
    
    </Drawer.Navigator>
  );
};

export default DrawerOrder;

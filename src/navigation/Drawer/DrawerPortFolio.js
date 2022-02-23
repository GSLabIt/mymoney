import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomSidebarMenu from '../CustomSideBarMenu.js/CustomSidebarMenu';
import PortfolioScreen from '../Portfolio/PortfolioScreen';

const DrawerPortFolio = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="PortfolioScreen"
        component={PortfolioScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerPortFolio;

import { View, Text } from 'react-native';
import React, { Component } from 'react';
import {COLORS, ROUTES} from '../constants';
import {Home, Wallet, Notifications, Settings} from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '../components/CustomDrawer';



const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />} >
      <Drawer.Screen name={ROUTES.HOME_DRAWER} component={BottomTabNavigator}  options={{title: 'หน้าหลัก'}}  />
      <Drawer.Screen name={ROUTES.WALLET_DRAWER} component={Wallet} />
      <Drawer.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator
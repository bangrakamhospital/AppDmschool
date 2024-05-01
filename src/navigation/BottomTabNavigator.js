import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {COLORS, ROUTES} from '../constants';
import {Home, Wallet, Notifications, Settings, addvalue} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
function BottomTabNavigator(){
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === ROUTES.SETTINGS) {
            iconName = focused ? 'md-chatbox-ellipses-sharp' : 'md-chatbox-ellipses-outline';
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? 'ios-duplicate-sharp' : 'ios-duplicate-outline';
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused
              ? 'md-newspaper' : 'md-newspaper-outline';
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })} >   
      <Tab.Screen name={ROUTES.HOME_TAB} component={Home} options={{title: 'ข้อมูลคุณ'}} />
      <Tab.Screen name={ROUTES.WALLET} component={addvalue} options={{title: 'ส่งค่า'}}/>
      <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} options={{title: 'การรักษา'}} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} options={{title: 'พูดคุย'}} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
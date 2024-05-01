import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Login, ForgotPassword, Register,Detail, Sugarchecking, Bloodpressure, Heightweight, Bodytemp, O2saturation, Chart} from '../screens';
import {COLORS, ROUTES} from '../constants';
import DrawerNavigator from './DrawerNavigator';
const Stack = createStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
    console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{
    
    }} 
    initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen 
      name={ROUTES.FORGOT_PASSWORD} 
      component={ForgotPassword}
      options={({route}) => ({
        headerTintColor: COLORS.white,
        //headerBackTitle : 'Back',
        //headerBackTitleVisible: false,
        headerStyle:{
            backgroundColor: COLORS.primary,
        },
        title: route.params.userId,
      })}
       />
      <Stack.Screen name={ROUTES.REGISTER} component={Register}  />
      <Stack.Screen name={ROUTES.HOME} 
      component={DrawerNavigator}
      options={{headerShown:false}} />
      <Stack.Screen name={ROUTES.DETAIL_23} component={Detail} />
      <Stack.Screen name={ROUTES.Chart} component={Chart} />
      <Stack.Screen name={ROUTES.Sugarchecking} component={Sugarchecking}  />
      <Stack.Screen name={ROUTES.Bloodpressure} component={Bloodpressure}  />
      <Stack.Screen name={ROUTES.Heightweight} component={Heightweight}  />
      <Stack.Screen name={ROUTES.Bodytemp} component={Bodytemp}  />
      <Stack.Screen name={ROUTES.O2saturation} component={O2saturation}  />
    </Stack.Navigator>
  );
}
export default AuthNavigator;
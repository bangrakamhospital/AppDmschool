import React, { useState,useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, ROUTES} from '../../constants';
import Logo from '../../assets/icons/LOGO.svg';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
  //const {navigation} = props;
  const navigation = useNavigation();
  const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const handleLogin = async () => {
        const response = await fetch('https://xn--72c0aoae1bkgb0asc2c1fc5b3eyfe6a.com/dmdash/jwt/',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresIn: 600000
            })
        })
        const data = await response.json()
        if(data.status === 'ok'){
            Alert.alert(
                data.status,
                data.message,
                [
                 { text: "OK",onPress: () => console.log("OK Pressed")}
                ] 
             );
            await AsyncStorage.setItem('@accessToken',data.accessToken)
            const accessToken = await AsyncStorage.getItem('@accessToken')
            navigation.navigate('Home')
        }else{
            Alert.alert(
               data.status,
               data.message,
               [
                { text: "OK",onPress: () => console.log("OK Pressed")}
               ] 
            );
        }
        console.log(data.accessToken)
    }
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
          <Image source={require('../../assets/icons/logoicon.png')}
            style={{ width:150 , height:150}}
            />
            
          </View>
          <View style={styles.row}>
          </View>
          <Text style={styles.loginContinueTxt}>Login</Text>
          <TextInput style={styles.input} placeholder="User" value={username}
            onChangeText={text => setUsername(text)}/>
          <TextInput style={styles.input} placeholder="Password" value={password}
            onChangeText={text => setPassword(text)} />

          <View style={styles.loginBtnWrapper}>
            <LinearGradient
              colors={[COLORS.gradientForm, COLORS.primary]}
              style={styles.linearGradient}
              start={{y: 0.0, x: 0.0}}
              end={{y: 1.0, x: 0.0}}>
              {/******************** LOGIN BUTTON *********************/}
              <TouchableOpacity
            onPress={handleLogin}
              activeOpacity={0.7} style={styles.loginBtn}>
                <Text style={styles.loginText}> เข้าสู่ระบบ</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
          <TouchableOpacity
         onPress={() =>
          navigation.navigate(ROUTES.FORGOT_PASSWORD, {
            userId: 'X0001',
          })
        }
          style={styles.forgotPassBtn}>
            <Text style={styles.forgotPassText}>ฉันลืมรหัสผ่าน?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> ไม่ได้อยู่ในระบบ? </Text>
          {/******************** REGISTER BUTTON *********************/}
          <TouchableOpacity>
            <Text style={styles.signupBtn}>สมัครลงทะเบียนเข้าระบบ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
});

import React,{ useState, useEffect} from 'react'
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS, IMGS} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage'

const {width} = Dimensions.get('screen');

const CustomDrawer = props => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const fetchUser = async () => {
    const accessToken = await AsyncStorage.getItem('@accessToken')
    const response = await fetch('https://xn--72c0aoae1bkgb0asc2c1fc5b3eyfe6a.com/dmdash/jwt/userauth.php', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
    })
    
    const data = await response.json()
    .catch((error) => {
      // Handle any errors that occur
      alert (error)
  });
   
    setUser(data.user)
      if(data.status === 'forbidden'|| data.status === ''){
          navigation.navigate(ROUTES.LOGIN)
      }
    setIsLoading(false) 
}
useEffect(() => {
  fetchUser()
}, [isLoading])
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={IMGS.bgPattern} style={{height: 140}}>
        <Image source={{ uri: user.avatar }} style={styles.userImg} />
      </ImageBackground>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});

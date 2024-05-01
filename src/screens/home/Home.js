import {COLORS, ROUTES} from '../../constants';
import { StyleSheet, Text, View, Image, Button, Pressable, Alert ,ScrollView} from 'react-native'
import React,{ useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Chart, Detail} from '../../screens';
import Myscreen from '../../components/LineChart'



const Home = ({ navigation }) => {
  const onPress2 =  async () => {
    const accessToken2 = await AsyncStorage.getItem('@accessToken')
    await AsyncStorage.setItem('@accessToken',accessToken2)
  navigation.navigate(Detail)
  }
  const onPress3 =  async () => {
  navigation.navigate(Chart)
  }
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
      const vbb =  String(user.fgname)
      const substrings = vbb.split(',');
      const renderedSubstrings = [];

      for (let i = 0; i < substrings.length; i++) {
      const substring = substrings[i];
      const aes = "profile"+i
      renderedSubstrings.push(<Text key={aes} style={{ textAlign: 'center', width: '100%',fontSize:14,marginTop:10}} >{substring}</Text>);
      }
  useEffect(() => {
      fetchUser()
  }, [isLoading])
  return (
       
    <View  style={styles.container}>
     { isLoading ?
        <Text>Loading</Text>
    :
    <ScrollView>
        <View style={styles.container} >
            <View style={styles.top} > 
                 <Image source={{ uri: user.avatar }}
                style={{
               
                height: 100,
                width: 100,
                borderBottomLeftRadius: 50,
                borderRadius: 110 / 2,
           
                }}
                />
                <Text  style={{
                   textAlign:'center',
                width: '100%',
                marginTop:10,
                fontSize:20
                }} >{user.fname} {user.lname}</Text>
                 <Text  style={{
                textAlign: 'center',
                height: 30,
                width: '100%',
                fontSize:18
                }} >เพศ {user.sex}</Text>
                 <Text  style={{
                textAlign: 'center',
                height: 30,
                width: '100%',
                fontSize:18
                }} >อายุ {user.age} ปี</Text>
                
            </View>
            <View style={styles.middle} >  
                <Text  style={{
                textAlign: 'center',
                height: 30,
                width: '100%',
                marginTop:30,
                fontSize:18
                }} >ผลตรวจร่างกายล่าสุด</Text>
                 <Text  style={{
                textAlign: 'center',
                width: '100%',
                fontSize:16
                }} >{user.savedate}</Text>
                <Text  style={{
                textAlign: 'center',
                width: '100%',
                fontSize:16
                }} >รอบเอว(CM) {user.waistline} cm</Text>
                 <Text  style={{
                textAlign: 'center',
                width: '100%',
                fontSize:16
                }} >น้ำหนัก (KG) {user.weight}  kg</Text>
                <Text  style={{
                textAlign: 'center',
                width: '100%',
                fontSize:16
                }} >ส่วนสูง (CM) {user.height}  cm</Text>
                <Text  style={{
                textAlign: 'center',
                width: '100%',
                fontSize:16
                }} >ความดันโลหิต (BP) {user.bp}</Text>
                <Text  style={{
                textAlign: 'center',
                width: '100%',
                fontSize:16
                }} >BMI {user.showbmi}</Text>
                <Text  style={{
                textAlign: 'center',
                width: '100%',
                fontSize:16
                }} ></Text>
            </View>
            <View>
              <Text>กราฟน้ำตาล </Text>
              <Myscreen 
              line_chart_date={[
                {month: 'Jan',value:300},
                {month: 'Fed',value:400},
                {month: 'Mar',value:300},
                {month: 'Apr',value:620},
                {month: 'May',value:545},
                {month: 'June',value:545},
              ]}
              containerHeight={400} circleColor='#daa520' axisColor='#9dd' /> 
           </View>
      
            <View style={styles.bottom} >  
                <Text  style={{
                     textAlign: 'center',
                     width: '100%',
                     fontSize:18,
                     marginTop:10
                }} >ผลตรวจน้ำตาลในเลือด</Text>
                      {renderedSubstrings}
                    <Pressable onPress={onPress2}>
                    <Text>รายละเอียดเพิ่มเติม</Text>
                    </Pressable>
                    <Pressable onPress={onPress3}>
                    <Text>chart</Text>
                    </Pressable>
            </View>
           
            <Button
                    onPress={fetchUser}
                    title="Reload"
                />
        </View>
        </ScrollView>
        
     }
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    margin: 0,
    justifyContent: 'space-between',
  },
  container2: {
    flex: 0.5,
    backgroundColor: '#fff',
  },
  top: {
    flex: 0.3,
    width:'100%',
    backgroundColor: '#fff',
    borderWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    flex: 0.3,
    backgroundColor: '#fff',
    borderWidth: 0,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

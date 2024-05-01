import { Alert, StyleSheet, Text, View, Button} from 'react-native'
import React,{ useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Detail = ({ navigation }) =>  {
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
       
        setUser(data.user)
        setIsLoading(false) 
    }
        const vbb =  String(user.fgname)
            const substrings = vbb.split(',');
            const renderedSubstrings = [];

            for (let i = 0; i < substrings.length; i++) {
            const substring = substrings[i];
            const aes = "Detail"+i
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
       <View style={styles.container} >
        {renderedSubstrings}
        <Button
           onPress={fetchUser}
           title="Reload"
       />   
           </View>
               
    }
   </View>
    
  )
}

export default Detail
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
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      middle: {
        flex: 0.3,
        backgroundColor: '#fff',
        borderWidth: 1,
      },
      bottom: {
        flex: 0.3,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
})
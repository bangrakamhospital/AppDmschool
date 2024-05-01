import React, {useState, useEffect, useRef} from 'react';
import {View, Text, SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView, Button,TouchableOpacity,Alert} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import {COLORS,ROUTES} from '../../constants';
const {width} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import 'moment/locale/th';
import AsyncStorage from '@react-native-async-storage/async-storage';
moment.locale('th');

const Bodytemp = ({ navigation }) => {
  
	const [Number, setNumber] = useState([]);
	const [Numbersend, setNumbersend] = useState([]);


	const [date, setDate] = useState(new Date())
 	const [open, setOpen] = useState(false)
  let date2 = moment(date).add(543, 'year');
  const formattedDate = date2.format("D MMMM YYYY");
  const [user, setUser] = useState({})
  const [iduser, setIdUser] =  useState([]);
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
  setIdUser(user.id)
      if(data.status === 'forbidden'|| data.status === ''){
          navigation.navigate(ROUTES.LOGIN)
      }
    setIsLoading(false) 
}

  const renderItems = () => {
    const items = [];
    for (let i = 0; i < 500; i++) {
      items.push(
        {title: {i}},
      );
    }
    return items;
  }

  useEffect(() => {
    fetchUser()
    setTimeout(() => {
	
	  setNumber([
        
        {title: '32'},{title: '32.1'},{title: '32.2'},{title: '32.3'},{title: '32.4'},{title: '32.5'},{title: '32.6'},{title: '32.7'},{title: '32.8'},{title: '32.9'},
        {title: '33'},{title: '33.1'},{title: '33.2'},{title: '33.3'},{title: '33.4'},{title: '33.5'},{title: '33.6'},{title: '33.7'},{title: '33.8'},{title: '33.9'},
        {title: '34'},{title: '34.1'},{title: '34.2'},{title: '34.3'},{title: '34.4'},{title: '34.5'},{title: '34.6'},{title: '34.7'},{title: '34.8'},{title: '34.9'},
        {title: '35'},{title: '35.1'},{title: '35.2'},{title: '35.3'},{title: '35.4'},{title: '35.5'},{title: '35.6'},{title: '35.7'},{title: '35.8'},{title: '35.9'},
        {title: '36'},{title: '36.1'},{title: '36.2'},{title: '36.3'},{title: '36.4'},{title: '36.5'},{title: '36.6'},{title: '36.7'},{title: '36.8'},{title: '36.9'},
        {title: '37'},{title: '37.1'},{title: '37.2'},{title: '37.3'},{title: '37.4'},{title: '37.5'},{title: '37.6'},{title: '37.7'},{title: '37.8'},{title: '37.9'},
        {title: '38'},{title: '38.1'},{title: '38.2'},{title: '38.3'},{title: '38.4'},{title: '38.5'},{title: '38.6'},{title: '38.7'},{title: '38.8'},{title: '38.9'},
        {title: '39'},{title: '39.1'},{title: '39.2'},{title: '39.3'},{title: '39.4'},{title: '39.5'},{title: '39.6'},{title: '39.7'},{title: '39.8'},{title: '39.9'},
        {title: '40'},{title: '40.1'},{title: '40.2'},{title: '40.3'},{title: '40.4'},{title: '40.5'},{title: '40.6'},{title: '40.7'},{title: '40.8'},{title: '40.9'},
        {title: '41'},{title: '41.1'},{title: '41.2'},{title: '41.3'},{title: '41.4'},{title: '41.5'},{title: '41.6'},{title: '41.7'},{title: '41.8'},{title: '41.9'},
        {title: '42'},{title: '42.1'},{title: '42.2'},{title: '42.3'},{title: '42.4'},{title: '42.5'},{title: '42.6'},{title: '42.7'},{title: '42.8'},{title: '42.9'},
       
      ]);
      
  
    }, 1000);
  },[isLoading]);


  const handleLogin = async () => {
        const response = await fetch('https://xn--72c0aoae1bkgb0asc2c1fc5b3eyfe6a.com/dmdash/dmbodytemp/',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Numbersend: Numbersend,
                datesend: date,
                iduser: iduser,
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
			 navigation.navigate('Home')
        }else{
            Alert.alert(
               data.status,
               data.message,
               [
                { text: "on",onPress: () => console.log("on Pressed")}
               ] 
            );
        }
        console.log(data.accessToken)
    }
		
  return (
    <SafeAreaView style={styles.saveAreaViewContainer}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      { isLoading ?
        <Text>Loading</Text>
    : 
      <View style={styles.viewContainer}>
   
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}>
			 <View style={styles.dropdownsRow}>
        
			 <Text  style={{
                   textAlign:'center',
                marginTop:10,
                fontSize:20
                }} >{formattedDate}</Text>
			 <Button title="เปลี่ยนวันที่" onPress={() => setOpen(true)} />
      <DatePicker
        modal
		mode="date"
        open={open}
        date={date}
		format={'DD/MM/YYYY'}
		locale={'th'}
		onConfirm={(date) => {
          setOpen(false)
          setDate(date)
		  console.log(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
			 </View>

	<View style={styles.dropdownsRow}>

		  <SelectDropdown
              data={Number}
              onSelect={(selectedItem, index) => {
				setNumbersend(selectedItem.title)
				console.log(Numbersend);
              }}
              defaultButtonText={'ค่าอุณหภูมิ'}
              buttonTextAfterSelection={(selectedItem, index) => {
				

                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            /></View>
            <View style={styles.divider} />
          
			
			<View style={styles.dropdownsRow}>
			<LinearGradient
              colors={[COLORS.gradientForm, COLORS.primary]}
              style={styles.linearGradient}
              start={{y: 0.0, x: 0.0}}
              end={{y: 1.0, x: 0.0}}>
              {/******************** LOGIN BUTTON *********************/}
              <TouchableOpacity
            onPress={handleLogin}
              activeOpacity={0.7} style={styles.loginBtn}>
                <Text style={styles.loginText}>  ส่งค่าอุณหภูมิ</Text>
              </TouchableOpacity>
            </LinearGradient>
			</View>

		
       
       </ScrollView>
       
    </View>
}
    </SafeAreaView>
  );
};

export default Bodytemp;
const styles = StyleSheet.create({
	shadow: {
	  shadowColor: '#000',
	  shadowOffset: {width: 0, height: 6},
	  shadowOpacity: 0.1,
	  shadowRadius: 10,
	  elevation: 10,
	},
	header: {
	  flexDirection: 'row',
	  width,
	  height: 50,
	  alignItems: 'center',
	  justifyContent: 'center',
	  backgroundColor: '#F6F6F6',
	},
	headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
	saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
	viewContainer: {flex: 1, width, backgroundColor: '#FFF'},
	scrollViewContainer: {
	  flexGrow: 1,
	  justifyContent: 'space-between',
	  alignItems: 'center',
	  paddingVertical: '10%',
	},
	dropdownsRow: {flexDirection: 'row', width: '100%', paddingHorizontal: '5%'},
  
	dropdown1BtnStyle: {
	  flex: 1,
	  height: 50,
	  backgroundColor: '#FFF',
	  borderRadius: 8,
	  borderWidth: 1,
	  borderColor: '#444',
	},
	dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
	dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
	dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
	dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
	divider: {width: 12},
	dropdown2BtnStyle: {
	  flex: 1,
	  height: 50,
	  backgroundColor: '#FFF',
	  borderRadius: 8,
	  borderWidth: 1,
	  borderColor: '#444',
	},
	dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left'},
	dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
	dropdown2RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
	dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'},
	loginText: {
		color: COLORS.white,
		fontSize: 16,
		fontWeight: '400',
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
  });

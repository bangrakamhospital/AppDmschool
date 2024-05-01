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

const O2saturation = ({ navigation }) => {
  
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
        
      {title: '30'},{title: '31'},{title: '32'},{title: '33'},{title: '34'},{title: '35'},{title: '36'},{title: '37'},{title: '38'},{title: '39'},
        {title: '40'},{title: '41'},{title: '42'},{title: '43'},{title: '44'},{title: '45'},{title: '46'},{title: '47'},{title: '48'},{title: '49'},
        {title: '50'},{title: '51'},{title: '52'},{title: '53'},{title: '54'},{title: '55'},{title: '56'},{title: '57'},{title: '58'},{title: '59'},
        {title: '60'},{title: '61'},{title: '62'},{title: '63'},{title: '64'},{title: '65'},{title: '66'},{title: '67'},{title: '68'},{title: '69'},
        {title: '70'},{title: '71'},{title: '72'},{title: '73'},{title: '74'},{title: '75'},{title: '76'},{title: '77'},{title: '78'},{title: '79'},
        {title: '80'},{title: '81'},{title: '82'},{title: '83'},{title: '84'},{title: '85'},{title: '86'},{title: '87'},{title: '88'},{title: '89'},
        {title: '90'},{title: '91'},{title: '92'},{title: '93'},{title: '94'},{title: '95'},{title: '96'},{title: '97'},{title: '98'},{title: '99'},
        {title: '100'}
      ]);
      
  
    }, 1000);
  },[isLoading]);


  const handleLogin = async () => {
        const response = await fetch('https://xn--72c0aoae1bkgb0asc2c1fc5b3eyfe6a.com/dmdash/dmo2saturation/',{
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
              defaultButtonText={'ค่าออกซิเจนในเลือด (%)'}
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
                <Text style={styles.loginText}>  ส่งค่าออกซิเจนในเลือด</Text>
              </TouchableOpacity>
            </LinearGradient>
			</View>

		
       
       </ScrollView>
       
    </View>
}
    </SafeAreaView>
  );
};

export default O2saturation;
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

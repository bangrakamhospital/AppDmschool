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

const Heightweight = ({ navigation }) => {
  
	const [Number, setNumber] = useState([]);
	const [Numbersend, setNumbersend] = useState([]);
  const [Number2, setNumber2] = useState([]);
	const [Numbersend2, setNumbersend2] = useState([]);

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
        
        {title: '70'},{title: '71'},{title: '72'},{title: '73'},{title: '74'},{title: '75'},{title: '76'},{title: '77'},{title: '78'},{title: '79'},
        {title: '80'},{title: '81'},{title: '82'},{title: '83'},{title: '84'},{title: '85'},{title: '86'},{title: '87'},{title: '88'},{title: '89'},
        {title: '90'},{title: '91'},{title: '92'},{title: '93'},{title: '94'},{title: '95'},{title: '96'},{title: '97'},{title: '98'},{title: '99'},
        {title: '100'},{title: '101'},{title: '102'},{title: '103'},{title: '104'},{title: '105'},{title: '106'},{title: '107'},{title: '108'},{title: '109'},
        {title: '110'},{title: '111'},{title: '112'},{title: '113'},{title: '114'},{title: '115'},{title: '116'},{title: '117'},{title: '118'},{title: '119'},
        {title: '120'},{title: '121'},{title: '122'},{title: '123'},{title: '124'},{title: '125'},{title: '126'},{title: '127'},{title: '128'},{title: '129'},
        {title: '130'},{title: '131'},{title: '132'},{title: '133'},{title: '134'},{title: '135'},{title: '136'},{title: '137'},{title: '138'},{title: '139'},
        {title: '140'},{title: '141'},{title: '142'},{title: '143'},{title: '144'},{title: '145'},{title: '146'},{title: '147'},{title: '148'},{title: '149'},
        {title: '150'},{title: '151'},{title: '152'},{title: '153'},{title: '154'},{title: '155'},{title: '156'},{title: '157'},{title: '158'},{title: '159'},
        {title: '160'},{title: '161'},{title: '162'},{title: '163'},{title: '164'},{title: '165'},{title: '166'},{title: '167'},{title: '168'},{title: '169'},
        {title: '170'},{title: '171'},{title: '172'},{title: '173'},{title: '174'},{title: '175'},{title: '176'},{title: '177'},{title: '178'},{title: '179'},
        {title: '180'},{title: '181'},{title: '182'},{title: '183'},{title: '184'},{title: '185'},{title: '186'},{title: '187'},{title: '188'},{title: '189'},
        {title: '190'},{title: '191'},{title: '192'},{title: '193'},{title: '194'},{title: '195'},{title: '196'},{title: '197'},{title: '198'},{title: '199'},
        {title: '200'},{title: '201'},{title: '202'},{title: '203'},{title: '204'},{title: '205'},{title: '206'},{title: '207'},{title: '208'},{title: '209'},
        {title: '210'},{title: '211'},{title: '212'},{title: '213'},{title: '214'},{title: '215'},{title: '216'},{title: '217'},{title: '218'},{title: '219'},
        {title: '220'},{title: '221'},{title: '222'},{title: '223'},{title: '224'},{title: '225'},{title: '226'},{title: '227'},{title: '228'},{title: '229'},
        {title: '230'},{title: '231'},{title: '232'},{title: '233'},{title: '234'},{title: '235'},{title: '236'},{title: '237'},{title: '238'},{title: '239'},
        {title: '240'},{title: '241'},{title: '242'},{title: '243'},{title: '244'},{title: '245'},{title: '246'},{title: '247'},{title: '248'},{title: '249'},
        {title: '250'},{title: '251'},{title: '252'},{title: '253'},{title: '254'},{title: '255'},{title: '256'},{title: '257'},{title: '158'},{title: '259'},
      ]);
      
      setNumber2([
        {title: '10'},{title: '11'},{title: '12'},{title: '13'},{title: '14'},{title: '15'},{title: '16'},{title: '17'},{title: '18'},{title: '19'},
        {title: '20'},{title: '21'},{title: '22'},{title: '23'},{title: '24'},{title: '25'},{title: '26'},{title: '27'},{title: '28'},{title: '29'},
        {title: '30'},{title: '31'},{title: '32'},{title: '33'},{title: '34'},{title: '35'},{title: '36'},{title: '37'},{title: '38'},{title: '39'},
        {title: '40'},{title: '41'},{title: '42'},{title: '43'},{title: '44'},{title: '45'},{title: '46'},{title: '47'},{title: '48'},{title: '49'},
        {title: '50'},{title: '51'},{title: '52'},{title: '53'},{title: '54'},{title: '55'},{title: '56'},{title: '57'},{title: '58'},{title: '59'},
        {title: '60'},{title: '61'},{title: '62'},{title: '63'},{title: '64'},{title: '65'},{title: '66'},{title: '67'},{title: '68'},{title: '69'},
        {title: '70'},{title: '71'},{title: '72'},{title: '73'},{title: '74'},{title: '75'},{title: '76'},{title: '77'},{title: '78'},{title: '79'},
        {title: '80'},{title: '81'},{title: '82'},{title: '83'},{title: '84'},{title: '85'},{title: '86'},{title: '87'},{title: '88'},{title: '89'},
        {title: '90'},{title: '91'},{title: '92'},{title: '93'},{title: '94'},{title: '95'},{title: '96'},{title: '97'},{title: '98'},{title: '99'},
        {title: '100'},{title: '101'},{title: '102'},{title: '103'},{title: '104'},{title: '105'},{title: '106'},{title: '107'},{title: '108'},{title: '109'},
        {title: '110'},{title: '111'},{title: '112'},{title: '113'},{title: '114'},{title: '115'},{title: '116'},{title: '117'},{title: '118'},{title: '119'},
        {title: '120'},{title: '121'},{title: '122'},{title: '123'},{title: '124'},{title: '125'},{title: '126'},{title: '127'},{title: '128'},{title: '129'},
        {title: '130'},{title: '131'},{title: '132'},{title: '133'},{title: '134'},{title: '135'},{title: '136'},{title: '137'},{title: '138'},{title: '139'},
        {title: '140'},{title: '141'},{title: '142'},{title: '143'},{title: '144'},{title: '145'},{title: '146'},{title: '147'},{title: '148'},{title: '149'},
        {title: '150'},{title: '151'},{title: '152'},{title: '153'},{title: '154'},{title: '155'},{title: '156'},{title: '157'},{title: '158'},{title: '159'},
        {title: '160'},{title: '161'},{title: '162'},{title: '163'},{title: '164'},{title: '165'},{title: '166'},{title: '167'},{title: '168'},{title: '169'},
        {title: '170'},{title: '171'},{title: '172'},{title: '173'},{title: '174'},{title: '175'},{title: '176'},{title: '177'},{title: '178'},{title: '179'},
        {title: '180'},{title: '181'},{title: '182'},{title: '183'},{title: '184'},{title: '185'},{title: '186'},{title: '187'},{title: '188'},{title: '189'},
        {title: '190'},{title: '191'},{title: '192'},{title: '193'},{title: '194'},{title: '195'},{title: '196'},{title: '197'},{title: '198'},{title: '199'},
        {title: '200'},{title: '201'},{title: '202'},{title: '203'},{title: '204'},{title: '205'},{title: '206'},{title: '207'},{title: '208'},{title: '209'},
        {title: '210'},{title: '211'},{title: '212'},{title: '213'},{title: '214'},{title: '215'},{title: '216'},{title: '217'},{title: '218'},{title: '219'},
        {title: '220'},{title: '221'},{title: '222'},{title: '223'},{title: '224'},{title: '225'},{title: '226'},{title: '227'},{title: '228'},{title: '229'},
        {title: '230'},{title: '231'},{title: '232'},{title: '233'},{title: '234'},{title: '235'},{title: '236'},{title: '237'},{title: '238'},{title: '239'},
        {title: '240'},{title: '241'},{title: '242'},{title: '243'},{title: '244'},{title: '245'},{title: '246'},{title: '247'},{title: '248'},{title: '249'},
        {title: '250'},{title: '251'},{title: '252'},{title: '253'},{title: '254'},{title: '255'},{title: '256'},{title: '257'},{title: '158'},{title: '259'},
      ]);
    }, 1000);
  },[isLoading]);


  const handleLogin = async () => {
        const response = await fetch('https://xn--72c0aoae1bkgb0asc2c1fc5b3eyfe6a.com/dmdash/dmheightweight/',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Numbersend: Numbersend,
                Numbersend2: Numbersend2,
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
              defaultButtonText={'ส่วนสูง'}
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
			<SelectDropdown
              data={Number2}
              onSelect={(selectedItem, index) => {
              setNumbersend2(selectedItem.title)
              console.log(Numbersend2);
              }}
              defaultButtonText={'น้ำหนัก'}
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
            />
			</View>
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
                <Text style={styles.loginText}>  ส่งค่าส่วนสูง น้ำหนัก</Text>
              </TouchableOpacity>
            </LinearGradient>
			</View>

		
       
       </ScrollView>
       
    </View>
}
    </SafeAreaView>
  );
};

export default Heightweight;
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

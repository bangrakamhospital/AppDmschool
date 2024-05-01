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
moment.locale('th');

const Wallet = ({ navigation }) => {
	const [mealsend, setMealsend] = useState([]);
	const [meal, setMeal] = useState([]);
	const [Number, setNumber] = useState([]);
	const [Numbersend, setNumbersend] = useState([]);
	const [Period, setPeriod] = useState([]);
	const [Periodsend, setPeriodsend] = useState([]);
	const [date, setDate] = useState(new Date())
 	const [open, setOpen] = useState(false)
  let date2 = moment(date).add(543, 'year');
  const formattedDate = date2.format("D MMMM YYYY");

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
    setTimeout(() => {
		setMeal([
        {title: 'ก่อนอาหาร'},
        {title: 'หลังอาหาร'},
      ]);
	  setNumber([
      
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
        {title: '260'},{title: '261'},{title: '262'},{title: '263'},{title: '264'},{title: '265'},{title: '266'},{title: '267'},{title: '168'},{title: '269'},
        {title: '270'},{title: '271'},{title: '272'},{title: '273'},{title: '274'},{title: '275'},{title: '276'},{title: '277'},{title: '178'},{title: '279'},
        {title: '280'},{title: '281'},{title: '282'},{title: '283'},{title: '284'},{title: '285'},{title: '286'},{title: '287'},{title: '188'},{title: '289'},
        {title: '290'},{title: '291'},{title: '292'},{title: '293'},{title: '294'},{title: '295'},{title: '296'},{title: '297'},{title: '198'},{title: '299'},
        {title: '200'},{title: '201'},{title: '202'},{title: '203'},{title: '204'},{title: '205'},{title: '206'},{title: '207'},{title: '208'},{title: '209'},
        {title: '210'},{title: '211'},{title: '212'},{title: '213'},{title: '214'},{title: '215'},{title: '216'},{title: '217'},{title: '218'},{title: '219'},
        {title: '220'},{title: '221'},{title: '222'},{title: '223'},{title: '224'},{title: '225'},{title: '226'},{title: '227'},{title: '228'},{title: '229'},
        {title: '230'},{title: '231'},{title: '232'},{title: '233'},{title: '234'},{title: '235'},{title: '236'},{title: '237'},{title: '238'},{title: '239'},
        {title: '240'},{title: '241'},{title: '242'},{title: '243'},{title: '244'},{title: '245'},{title: '246'},{title: '247'},{title: '248'},{title: '249'},
        {title: '250'},{title: '251'},{title: '252'},{title: '253'},{title: '254'},{title: '255'},{title: '256'},{title: '257'},{title: '158'},{title: '259'},
        {title: '260'},{title: '261'},{title: '262'},{title: '263'},{title: '264'},{title: '265'},{title: '266'},{title: '267'},{title: '168'},{title: '269'},
        {title: '270'},{title: '271'},{title: '272'},{title: '273'},{title: '274'},{title: '275'},{title: '276'},{title: '277'},{title: '178'},{title: '279'},
        {title: '280'},{title: '281'},{title: '282'},{title: '283'},{title: '284'},{title: '285'},{title: '286'},{title: '287'},{title: '188'},{title: '289'},
        {title: '290'},{title: '291'},{title: '292'},{title: '293'},{title: '294'},{title: '295'},{title: '296'},{title: '297'},{title: '198'},{title: '299'},
        {title: '300'},{title: '301'},{title: '302'},{title: '303'},{title: '304'},{title: '305'},{title: '306'},{title: '307'},{title: '308'},{title: '309'},
        {title: '310'},{title: '311'},{title: '312'},{title: '313'},{title: '314'},{title: '315'},{title: '316'},{title: '317'},{title: '318'},{title: '319'},
        {title: '320'},{title: '321'},{title: '322'},{title: '323'},{title: '324'},{title: '325'},{title: '326'},{title: '327'},{title: '328'},{title: '329'},
        {title: '330'},{title: '331'},{title: '332'},{title: '333'},{title: '334'},{title: '335'},{title: '336'},{title: '337'},{title: '338'},{title: '339'},
        {title: '340'},{title: '341'},{title: '342'},{title: '343'},{title: '344'},{title: '345'},{title: '346'},{title: '347'},{title: '348'},{title: '349'},
        {title: '350'},{title: '351'},{title: '352'},{title: '353'},{title: '354'},{title: '355'},{title: '356'},{title: '357'},{title: '358'},{title: '359'},
        {title: '360'},{title: '361'},{title: '362'},{title: '363'},{title: '364'},{title: '365'},{title: '366'},{title: '367'},{title: '368'},{title: '369'},
        {title: '370'},{title: '371'},{title: '372'},{title: '373'},{title: '374'},{title: '375'},{title: '376'},{title: '377'},{title: '378'},{title: '379'},
        {title: '380'},{title: '381'},{title: '382'},{title: '383'},{title: '384'},{title: '385'},{title: '386'},{title: '387'},{title: '388'},{title: '389'},
        {title: '390'},{title: '391'},{title: '392'},{title: '393'},{title: '394'},{title: '395'},{title: '396'},{title: '397'},{title: '398'},{title: '399'},
        {title: '400'},{title: '401'},{title: '402'},{title: '403'},{title: '404'},{title: '405'},{title: '406'},{title: '407'},{title: '408'},{title: '409'},
        {title: '410'},{title: '411'},{title: '412'},{title: '413'},{title: '414'},{title: '415'},{title: '416'},{title: '417'},{title: '418'},{title: '419'},
        {title: '420'},{title: '421'},{title: '422'},{title: '423'},{title: '424'},{title: '425'},{title: '426'},{title: '427'},{title: '428'},{title: '429'},
        {title: '430'},{title: '431'},{title: '432'},{title: '433'},{title: '434'},{title: '435'},{title: '436'},{title: '437'},{title: '438'},{title: '439'},
        {title: '440'},{title: '441'},{title: '442'},{title: '443'},{title: '444'},{title: '445'},{title: '446'},{title: '447'},{title: '448'},{title: '449'},
        {title: '450'},{title: '451'},{title: '452'},{title: '453'},{title: '454'},{title: '455'},{title: '456'},{title: '457'},{title: '458'},{title: '459'},
        {title: '460'},{title: '461'},{title: '462'},{title: '463'},{title: '464'},{title: '465'},{title: '466'},{title: '467'},{title: '468'},{title: '469'},
        {title: '470'},{title: '471'},{title: '472'},{title: '473'},{title: '474'},{title: '475'},{title: '476'},{title: '477'},{title: '478'},{title: '479'},
        {title: '480'},{title: '481'},{title: '482'},{title: '483'},{title: '484'},{title: '485'},{title: '486'},{title: '487'},{title: '488'},{title: '489'},
        {title: '490'},{title: '491'},{title: '492'},{title: '493'},{title: '494'},{title: '495'},{title: '496'},{title: '497'},{title: '498'},{title: '499'},
      ]);
	  setPeriod([
        {title: 'เช้า'},{title: 'กลางวัน'},{title: 'เย็น'}
      ]);
    }, 1000);
  }, []);

  const renderHeader = () => {
    return (
      <View style={[styles.header, styles.shadow]}>
        <Text style={styles.headerTitle}>{'Demo 2'}</Text>
      </View>
    );
  };
  const handleLogin = async () => {
        const response = await fetch('https://xn--72c0aoae1bkgb0asc2c1fc5b3eyfe6a.com/dmdash/dmnumber/',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Numbersend: Numbersend,
                Periodsend: Periodsend,
                mealsend: mealsend,
                datesend: date,
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
      <View style={styles.viewContainer}>
        {renderHeader()}
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
              defaultButtonText={' ค่าน้ำตาล'}
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
              data={Period}
              onSelect={(selectedItem, index) => {
				setPeriodsend(selectedItem.title)
				console.log(Periodsend);
              }}
              defaultButtonText={'ช่วงเวลา'}
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
            <SelectDropdown
              data={meal}
              onSelect={(selectedItem, index) => {
                setMealsend(selectedItem.title)
				console.log(mealsend);
            
              }}
              defaultButtonText={'มื้ออาหาร'}
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
                <Text style={styles.loginText}>  ส่งค่าน้ำตาล</Text>
              </TouchableOpacity>
            </LinearGradient>
			</View>

		
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;
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

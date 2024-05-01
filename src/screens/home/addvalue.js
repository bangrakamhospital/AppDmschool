import React,{ useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Button, Pressable, Alert ,ScrollView} from 'react-native'
import {COLORS, ROUTES} from '../../constants';
import {Bloodpressure, Bodytemp, Heightweight, O2saturation, Sugarchecking} from '../../screens';




const Notifications = ({navigation}) => {
  const onPress2 = () => {
    navigation.navigate(Sugarchecking)
    }
    const onPress3 = () => {
      navigation.navigate(Bloodpressure)
      }
    const onPress4 = () => {
        navigation.navigate(Heightweight)
    }
    const onPress5 = () => {
      navigation.navigate(Bodytemp)
  }
  const onPress6 = () => {
    navigation.navigate(O2saturation)
}
  return (
    <ScrollView>
    <View style={styles.container} >
        <View style={styles.top} > 
        <Pressable onPress={onPress2} >
                    <Text>ส่งค่าน้ำตาลในเลือด</Text>
                    </Pressable>
        </View>
    </View>
    <View style={styles.container} >
        <View style={styles.top} > 
        <Pressable onPress={onPress3} >
                    <Text>ส่งค่าความดันโลหิต </Text>
                    </Pressable>
        </View>
    </View>
    <View style={styles.container} >
        <View style={styles.top} > 
        <Pressable onPress={onPress4} >
                    <Text>ส่งค่าน้ำหนัก ส่วนสูง </Text>
                    </Pressable>
        </View>
    </View>
    <View style={styles.container} >
        <View style={styles.top} > 
        <Pressable onPress={onPress5} >
                    <Text>ส่งค่าอุณหภูมิ</Text>
                    </Pressable>
        </View>
    </View>
    <View style={styles.container} >
        <View style={styles.top} > 
        <Pressable onPress={onPress6} >
                    <Text>ส่งค่าออกซิเจนในเลือด</Text>
                    </Pressable>
        </View>
    </View>
    </ScrollView>

  );
};


export default Notifications;

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

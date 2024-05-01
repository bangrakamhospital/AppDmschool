
import React from 'react';
import { View, Text } from 'react-native';
import MyScreen from '../../components/LineChart'; // นำหน้า MyScreen มา import

const Chart = () => {
  return (
    <View>
      <Text>Hello from App!</Text>
      <MyScreen /> 
    </View>
  );
};

export default Chart;
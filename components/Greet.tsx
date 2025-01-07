import React from 'react';
import { View, Text } from 'react-native';

const Greet = (props:any) => {
  return (
    <View>
      <Text>Hello, {props.name}!</Text>
    </View>
  );
}

export default Greet;
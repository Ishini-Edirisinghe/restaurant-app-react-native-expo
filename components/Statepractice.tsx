import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type CounterState = {
  count: number;
};

class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Count: {this.state.count}</Text>
        <Button
          title="Increment"
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Counter;

import React from 'react';
import {View, Text, StyleSheet, Button, TextInput, Image} from 'react-native';
export default class App extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>Hello from react native</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
});

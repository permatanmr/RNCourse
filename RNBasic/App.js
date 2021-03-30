/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{padding: 10, marginVertical: 5, height:100, borderWidth:1, width:'95%', borderRadius:5, backgroundColor: '#DAFAFA'}}>
        <Text>{this.props.name}</Text>
        <Text>{this.props.phone}</Text>
        <Text>{this.props.job}</Text>
        <Text>{this.props.address}</Text>
      </View>
    )
  }
}

class App extends Component {
  render() {
    return (
      <View style={{flex: 1,  alignItems: 'center', top: 50 }}>
        <Greeting name="Permata" phone="08123123123" address="BSD Serpong" job="CEO" />
        <Greeting name="Mutiara" phone="08123123123" address="BSD Serpong" job="CEO"/>
        <Greeting name="Ruby" phone="08123123123" address="BSD Serpong" job="CEO" />
        <Greeting name="Saifr"phone="08123123123" address="BSD Serpong" job="CEO"/>
      </View>
    )
  }
}

export default App;

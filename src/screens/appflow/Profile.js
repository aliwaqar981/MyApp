import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'#161F36'}}>
        <Text>Profile</Text>
      </View>
    );
  }
}

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        email:'',
        password:'',
        phone:''
    };
  }

  render() {
    return (
          <View style={{flex:1, marginStart:30, marginRight:30,alignItems: 'center', marginTop: 40}}>
            <TextInput
              style={[styles.inputs, {marginTop:0}]}
              placeholder="Name"
              onChangeText={name => this.setState({name})}
              value={this.state.name}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
             <TextInput
              style={styles.inputs}
              placeholder="Password"
              onChangeText={password => this.setState({password})}
              value={this.state.password}
            />
             <TextInput
              style={styles.inputs}
              placeholder="Phone number"
              onChangeText={phone => this.setState({phone})}
              value={this.state.phone}
            />

            <TouchableOpacity 
                style={styles.signup_button}
            ><Text style={{color:'#fff', fontSize: 17}}>Sign up</Text></TouchableOpacity>
          </View>
      );
  }
}

const styles=StyleSheet.create(
  {
    inputs:{
      height: 40,
      width: '90%',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      marginTop:20
    },
    signup_button:{
      marginTop:40, 
      borderRadius: 30,
      backgroundColor: '#403e5b', 
      width:'90%',  
      alignItems:'center',
      height:50,  
      padding:10
    }
  }
);
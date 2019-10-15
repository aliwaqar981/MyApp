import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, { Component } from 'react';

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
    const {navigate}=this.props.nav;
    return (
          <View style={{flex:1, marginStart:30, marginRight:30,alignItems: 'center', marginTop: 20}}>
            <View style={styles.container}>
            <Image style={{height:15, width:15}} resizeMode="contain" source={require('../../assets/icons/name.png')}/>

              <TextInput
                style={styles.inputs}
                placeholder="Name"
                onChangeText={name => this.setState({name})}
                value={this.state.name}
              />
            </View>
            <View style={styles.container}>
              <Image style={{height:15, width:15}} resizeMode="contain" source={require('../../assets/icons/email.png')}/>
              <TextInput
                style={styles.inputs}
                placeholder="Your email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}
              />
            </View>
            <View style={styles.container}>
              <Image style={{height:15, width:15}} resizeMode="contain" source={require('../../assets/icons/password.png')}/>
              <TextInput
                style={styles.inputs}
                placeholder="Password"
                onChangeText={password => this.setState({password})}
                value={this.state.password}
              />
          </View>
          <View style={styles.container}>
            <Image style={{height:15, width:15}} resizeMode="contain" source={require('../../assets/icons/phone.png')}/>
             <TextInput
              style={styles.inputs}
              placeholder="Phone number"
              onChangeText={phone => this.setState({phone})}
              value={this.state.phone}
            />
          </View>

            <TouchableOpacity 
                style={styles.signup_button}
                onPress={()=>navigate('HomeScreen')}
            ><Text style={{color:'#fff', fontSize: 17}}>Sign up</Text></TouchableOpacity>
          </View>
      );
  }
}

const styles=StyleSheet.create(
  {
    inputs:{
      height: 40,
      width: '84%',
      marginStart:10
    },
    signup_button:{
      marginTop:40, 
      borderRadius: 30,
      backgroundColor: '#403e5b', 
      width:'90%',  
      alignItems:'center',
      height:50,  
      padding:10
    },
    container:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      marginTop: 20
    }
  }
);
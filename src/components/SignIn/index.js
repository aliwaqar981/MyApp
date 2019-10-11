import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, {Component} from 'react';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const {navigate}=this.props.nav
    return (
        <View style={{flex:1, marginStart:30, marginRight:30,alignItems: 'center', marginTop: 50}}>
          <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image style={{height:15, width:15}} resizeMode="contain" source={require('../../assets/icons/Oval.png')}/>
              <Image style={{height:15, width:15}} resizeMode="contain" source={require('../../assets/icons/Shape.png')}/>
            </View>
            <TextInput
              style={styles.inputs}
              placeholder="Your email"
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
          </View>
          <TextInput
            style={[styles.inputs, {marginTop:20}]}
            placeholder="Password"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />

            <TouchableOpacity style={styles.signin_button} onPress={()=>navigate('HomeScreen')}>
              <Text style={{color:'#fff', fontSize: 17}}>Sign in</Text>
            </TouchableOpacity>
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
    },
    signin_button:{
      marginTop:60, 
      borderRadius: 30,
      backgroundColor: '#403e5b', 
      width:'90%', 
      justifyContent:'center',
      alignItems:'center',
      height:50, 
      padding:10
    }
  }
);

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
    // const {nav}=this.props.nav
    return (
        <View style={{flex:1, marginStart:30, marginRight:30,alignItems: 'center', marginTop: 30}}>
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

            <TouchableOpacity 
              style={styles.signin_button}
              onPress={ () => this.props.nav.navigate('DailyScreen')}>
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
      marginStart:10
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

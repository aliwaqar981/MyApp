import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{width:'45%'}}>
            { this.props.label &&  
                <Text style={{ color:'#374273', paddingVertical:5}}>{this.props.label}</Text>
            }
            <View style={styles.innerContainer}>
                <TextInput/>
            </View>
        </View>
    );
  }
}

const styles=StyleSheet.create(
    {
        innerContainer:{
            borderWidth:1,
            borderRadius:10,
            height:40,
            borderColor:'#7482BD'
        }
    }
)
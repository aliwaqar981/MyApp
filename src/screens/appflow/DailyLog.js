import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import CustomBox from '../../components/CustomBox/CustomBox';
import CustomInput from '../../components/CustomInput/CustomInput'

export default class DailyLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground 
        source={require('../../assets/images/Background.jpg')}
        style={styles.screenBackground}
      >
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerArrow}>
                    <Image source={require('../../assets/icons/downArrow.png')}/>
                </View>
                <View style={styles.headerContent}>
                    <View style={{flex:0.4}}>
                        <Text style={{color:'#fff', fontSize:20, marginStart:30}}>Daily Log</Text>
                    </View>
                    <View style={{flex:0.6, flexDirection:'row'}}>
                        <Image source={require('../../assets/icons/leftArrow.png')}/>
                        <Image style={{height:15, width:15, marginStart:10}} source={require('../../assets/icons/calendar.png')}/>
                        <Text style={{color:'#fff', marginStart:10}}>Sept 30, 2019</Text>
                        <Image style={{marginStart:10}} source={require('../../assets/icons/rightArrow.png')}/>
                    </View>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.bodyRow}>
                    <CustomInput label="Loaded Amount" style={{marginRight:4}}/>
                    <CustomInput label="Loaded miles" style={{marginLeft: 4,}}/>
                </View>
                <View style={styles.bodyRow}>
                    <CustomInput label="Miles"/>
                    <CustomInput label="Empty Miles"/>
                </View>
                <View style={styles.bodyRow}>
                    <CustomInput label="Fuel"/>
                    <CustomInput label="T/R Expenses"/>
                </View>
                <View style={styles.bodyRow}>
                    <CustomInput label="Fuel"/>
                    <CustomInput label="T/R Expenses"/>
                </View>
                <View style={styles.bodyRow}>
                    <CustomInput label="Repairs"/>
                    <CustomInput label="NDN T/R Expenses"/>
                </View>
                <View
                    style={{
                        borderBottomColor: '#D8D8D8',
                        borderBottomWidth: 1,
                        marginHorizontal:20,
                        marginVertical:10
                    }}
                />

                <View style={styles.bodyRow}>
                    <CustomBox unit='WK'/>
                    <CustomBox unit='YR'/>
                </View>

                <View style={styles.bodyRow}>
                    <CustomBox unit='MT'/>
                    <CustomBox unit='QT'/>
                </View>
                
            </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles=StyleSheet.create(
    {
        screenBackground:{
            flex: 1,
            width: '100%', 
            height: '100%'
          },
        container:{
            flex: 1,
            backgroundColor: '#509AF8',
            marginTop: 40,
            borderTopEndRadius: 40,
            borderTopStartRadius: 40,
        },
        headerContainer:{
            flex: 1.7,
            marginTop:10
        },
        bodyContainer:{
            flex: 10,
            backgroundColor: '#fff',
            borderTopEndRadius: 40,
            borderTopStartRadius: 40,
            paddingTop:20
        },
        headerArrow:{
            flex:1, 
            alignItems:'center'
        },
        headerContent:{
            flex:5,
            flexDirection:'row' ,
            alignItems:'center', 
            justifyContent:'flex-start'
        },
        bodyRow:{
            flexDirection:'row',
            paddingHorizontal:30,
            justifyContent:'space-around'
        }
        
    }
)
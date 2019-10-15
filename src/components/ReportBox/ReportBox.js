import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

export default class ReportBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.reportHeader}>
            <Text style={{color:'white', fontSize:20, marginLeft:15}}>{this.props.title}</Text>
            <Image 
                style={styles.reportImage} 
                source={this.props.path}
                resizeMode='contain'
            />
        </View>
        <View style={{flex:1}}>
            <View style={styles.reportsBody}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View >
                        <Text style={styles.smallText}>Jun</Text>
                        <Text style={{ color:'#fff'}}>22,214</Text>
                    </View>
                    <Text style={styles.smallText}>20</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View >
                        <Text style={styles.smallText}>Jun</Text>
                        <Text style={{ color:'#fff'}}>22,214</Text>
                    </View>
                    <Text style={styles.smallText}>20</Text>
                </View>
            </View>
            <View style={styles.reportsBody}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View >
                        <Text style={styles.smallText}>Jun</Text>
                        <Text style={{ color:'#fff'}}>22,214</Text>
                    </View>
                    <Text style={styles.smallText}>20</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View >
                        <Text style={styles.smallText}>Jun</Text>
                        <Text style={{ color:'#fff'}}>22,214</Text>
                    </View>
                    <Text style={styles.smallText}>20</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        width:160,
        height:140,
        backgroundColor:'#6A799E',
        borderRadius:10
    },
    reportHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10
    },
    reportsBody:{
        flex:1, 
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginLeft:15, marginRight:18
    },
    reportImage:{
        width:40,
        height:40,
        marginRight:20
    },
    smallText:{
        fontSize:10, 
        color:'#a49ec6'}
})


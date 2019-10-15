import React, { Component } from 'react';

import ReportBox from '../../components/ReportBox/ReportBox'
import { View } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor:'#161F36'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:15}}>
          <ReportBox title='GROSS' path={require('../../assets/images/ovalPurple.png')}/>
          <ReportBox title='NET' path={require('../../assets/images/ovalBlue.png')}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:15}}>
          <ReportBox title='FUEL' path={require('../../assets/images/ovalPink.png')}/>
          <ReportBox title='MILES' path={require('../../assets/images/ovalGreen.png')}/>
        </View>
      </View>
    );
  }
}

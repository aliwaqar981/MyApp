import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view-forked';

import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/Background.jpg')}
        style={styles.screenBackground}>
        <View style={styles.container1}>
          <Text
            style={{
              color: '#fff',
              fontSize: 25,
              marginLeft: 40,
              marginTop: 60,
            }}>
            Welcome Back!
          </Text>
        </View>
        <View style={styles.container2}>
          <ScrollableTabView
            renderTabBar={() => (
              <ScrollableTabBar
                style={{marginTop:20}}
              />
            )}
            tabBarTextStyle={styles.tabBarTextStyle}
            tabBarInactiveTextColor={'grey'}
            tabBarActiveTextColor={'black'}
            tabBarUnderlineStyle={styles.underlineStyle}
            initialPage={0}>
            <SignIn
              key={'0'}
              tabLabel={'Sign In'}
              style={{flex: 1}}
              nav={this.props.navigation}
            />
            <SignUp
              key={'1'}
              tabLabel={'Sign Up'}
              style={{flex: 1}}
              nav={this.props.navigation}
            />
          </ScrollableTabView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  screenBackground:{
    flex: 1,
    width: '100%', 
    height: '100%'
  },
  container1: {
    flex: 0.35
  },
  container2: {
    flex: 0.65,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  underlineStyle: {
    alignSelf: 'flex-start',
    height: 3,
    backgroundColor: '#2084C5',
    borderRadius: 3,
    width: 15,
  },
});

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default class CustomBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxInput}>
          <TextInput />
        </View>
        <View style={styles.boxUnit}>
          <Text>{this.props.unit}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width:'45%',
    marginVertical:10
  },
  boxInput: {
    borderWidth: 1,
    borderEndWidth: 0,
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
    height: 40,
    width: '70%',
    borderColor: '#7482BD',
  },
  boxUnit: {
    alignItems: 'center',
    borderWidth: 1,
    borderStartWidth: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#f3f0fb',
    height: 40,
    justifyContent: 'center',
    width: '30%',
    borderColor: '#7482BD',
  },
});

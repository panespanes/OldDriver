'use strict';

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import HomeScene from './HomeScene'
class WelcomeScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          老司机
        </Text>
        <Text style={styles.instructions}>
          机动车违章查询
        </Text>
        <Image source = {require('../images/logo.png')}></Image>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f6',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default WelcomeScene;
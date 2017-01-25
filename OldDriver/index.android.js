/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import WelcomeScene from './scene/WelcomeScene'
export default class OldDriver extends Component {
  render() {
    return (
      <WelcomeScene/>
    );
  }
}


AppRegistry.registerComponent('OldDriver', () => OldDriver);

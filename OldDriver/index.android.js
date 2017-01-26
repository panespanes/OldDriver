/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator,
} from 'react-native';
import WelcomeScene from './scene/WelcomeScene'
import HomeScene from './scene/HomeScene'
export default class OldDriver extends Component {
	render() {
		let defaultSceneName = 'WelcomeScene';
		let DefaultScene = WelcomeScene;
		var globalNavigator;
		if (globalNavigator !== null) {
			setTimeout(() => {
				globalNavigator.push({
					scene: HomeScene
				});
			}, 2000);
		}
		return ( < Navigator initialRoute = {
				{
					scene: WelcomeScene
				}
			}
			renderScene = {
				(route, navigator) => {
					globalNavigator = navigator;
					let Scene = route.scene;
					return <Scene navigator = {navigator}/>
				}
			} >

			< /Navigator>
		);
	}
}


AppRegistry.registerComponent('OldDriver', () => OldDriver);
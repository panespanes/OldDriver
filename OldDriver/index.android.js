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
	BackAndroid,
} from 'react-native';
import WelcomeScene from './scene/WelcomeScene'
import HomeScene from './scene/HomeScene'
import QueryScene from './scene/QueryScene'

var globalNavigator;
export default class OldDriver extends Component {
	componentWillMount() {
		let defaultSceneName = 'WelcomeScene';
		let DefaultScene = WelcomeScene;
		if (globalNavigator !== null) {
			setTimeout(() => {
				globalNavigator.push({
					scene: HomeScene,
					navigator: globalNavigator,
				});
			}, 1000);
		}
		BackAndroid.addEventListener('hardwarePress', this.onBackAndroid);
	}
	componentWillUnmount() {
		BackAndroid.removeEventListener('hardwarePress', this.onBackAndroid);
	}

	render() {

		return ( < Navigator initialRoute = {
				{
					scene: WelcomeScene
				}
			}
			renderScene = {
				(route, navigator) => {
					globalNavigator = navigator;
					let Scene = route.scene;
					console.log('get Scene in renderScene');
					return <Scene navigator = {navigator} {...route.params}/>
				}
			} >

			< /Navigator>
		);
	}
	onBackAndroid = () => {
		const routers = globalNavigator.getCurrentRoutes();
		if (routers.length > 2) {
			globalNavigator.pop();
			return true;
		}
		return false;
	};
}


AppRegistry.registerComponent('OldDriver', () => OldDriver);
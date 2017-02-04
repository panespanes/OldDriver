'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native';
import QueryScene from './QueryScene'
import Style from '../styles/style.js'
var blue = Style.blue;
class HomeScene extends Component {
	render() {
		return (
			<View style = {styles.container}>
				
			
			<View style = {styles.buttonContainer}>
			<Image source = {require('../images/logo.png')} style = {styles.avatar}></Image>
				<TouchableOpacity onPress = {()=> onDelivery(this.props.navigator)}>
					<Image source = {require('../images/btn_select_blue.png')} style = {styles.button}>
						<Text style = {styles.text}>查询快递</Text>
					</Image>
				</TouchableOpacity>
				<TouchableOpacity onPress = {()=> onQuery(this.props.navigator)}>
					<Image source = {require('../images/btn_select_blue.png')} style = {styles.button}>
						<Text style = {[styles.text, {color: 'gray'}]}>星座</Text>
					</Image>
				</TouchableOpacity>
				<TouchableOpacity onPress = {()=> onStory(this.props.navigator)}>
					
					<Image source = {require('../images/btn_select_blue.png')} style = {styles.button}>
						<Text style = {[styles.text, {color: 'gray'}]}>讲个故事</Text>
					</Image>
				</TouchableOpacity>
			</View>
			</View>

		)
	}
}

function onQuery(navigator) {
	navigator.push({
		scene: QueryScene,
		navigator: navigator,
		params: {
			title: '星座',
			text: '例如:\n狮子座的运势\n或者\n双子座爱情怎么样',
		}
	});
}

function onDelivery(navigator) {
	navigator.push({
		scene: QueryScene,
		navigator: navigator,
		params: {
			title: '快递查询',
			prefix: '查询快递',
			text: '例如\n3321643852175',
			placeholder: '直接输入快递单号',
		}
	});
}

function onStory(navigator) {
	navigator.push({
		scene: QueryScene,
		navigator: navigator,
		params: {
			title: '故事',
			text: '例如:\n给我讲个故事\n或者\n讲个白雪公主的故事吧',
			placeholder: '输入你想听的, 随便什么',
		}
	});
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#f5f5f6',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5f5f6',
		padding: 20,
	},
	button: {
		marginTop: 15,
		width: 105,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 12,
		color: '#00A2E8',
	},
	avatar: {
		marginBottom: 30,
	}
});


export default HomeScene;
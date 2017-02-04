'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	NativeModules,
	TextInput,
	Image,
	TouchableOpacity,
} from 'react-native';
import StatusBar from '../component/StatusBar.js'

var EncryptionModule = NativeModules.EncryptionModule
var timestamp = new Date().getTime();
class QueryScene extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hidden: true,
			input: '',
			text: '',
		};
	}

	render() {
		// alert(encodeURIComponent('http://www.cheshouye.com/api/weizhang/query_task?'));

		return (
			<View style = {styles.container}>
				<StatusBar title = {this.props.title} onBack = {()=> {
					this.props.navigator.pop();
				}} />
				<View style = {{marginTop: 40}}>
				</View>
				<View style = {{flexDirection: 'row', alignItems: 'center'}}>
					
					<View style = {[styles.line, {width: 200}]}>
					
						<TextInput placeholder = {this.props.placeholder?this.props.placeholder:'输入你想了解的, 随便什么'} onChangeText = {
							(text)=> this.setState({input: text})
						} underlineColorAndroid = 'transparent'>
					
						</TextInput>
						<Image source = {require('../images/seperator.png')} style = {{width: 200}}></Image>
					</View>

					<View style = {{marginLeft: 20, width: 60, height: 60}}>
						<TouchableOpacity onPress = {()=> queryCity(this.state.input, this.props.prefix)}>
							<Image source = {require('../images/ok.png')} resizeMode = 'contain' style = {{width: 40, height: 40, marginLeft: 20}}
							>
							</Image>
						</TouchableOpacity>	
					</View>
				</View>
				<View style = {{margin: 20}}>
					<Text>
						{this.props.text}
					</Text>
				</View>
			</View>
		);
	}



}

function queryCity(input, prefix) {
	// console.log(`cardInfo: ${getCardInfo()}`);
	// console.log(`sign: ${getSign()}`);
	let qryStr = `http://www.tuling123.com/openapi/api?key=45dd130cf8e4418b9ad50a215adfc080&info=${prefix}${input}&loc=上海市`;
	return fetch(qryStr)
		.then((response) => response.json())
		.then((responseData) => {
			console.log(responseData.Description);
			alert(responseData.text);
			return responseData;
		})
		.catch((error) => {
			console.log(error);
			alert('its an error: ' + error);
		});
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: '#f5f5f6',
	},
	line: {
		marginLeft: 20,
	}
});


export default QueryScene;
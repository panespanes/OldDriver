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

class HomeScene extends Component {
	render() {
		return (
			<View style = {styles.container}>
				
			
			<View style = {styles.buttonContainer}>
			<Image source = {require('../images/logo.png')} style = {styles.avatar}></Image>
				<TouchableOpacity onPress = {this.onQuery}>
					<Image source = {require('../images/btn_select_blue.png')} style = {styles.button}>
						<Text style = {styles.text}>查询违章</Text>
					</Image>
				</TouchableOpacity>
				<TouchableOpacity onPress = {this.onCode}>
					<Image source = {require('../images/btn_select_blue.png')} style = {styles.button}>
						<Text style = {styles.text}>违章码对照表</Text>
					</Image>
				</TouchableOpacity>
					<Image source = {require('../images/btn_select_blue.png')} style = {styles.button}>
						<Text style = {styles.text}>违章地点查询</Text>
					</Image>
			</View>
			</View>

		)
	}
	onQuery() {

	}

	onCode() {

	}
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
		width: 95,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 12,
	},
	avatar: {
		marginBottom: 30,
	}
});


export default HomeScene;
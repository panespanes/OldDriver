'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');
class StatusBar extends Component {
	render() {
		return (
			<View style = {styles.container}>
				<View style = {styles.top}>
					<TouchableOpacity onPress= {this.props.onBack}>
						
					<View style = {{justifyContent: 'center', alignItems: 'flex-start', marginLeft: 10}}>
						<Image source = {require('../images/arrow.png')} style = {{width: 25, height: 25}}></Image>				
					</View>
					</TouchableOpacity>
					<View style = {styles.title}>
						<Text style = {styles.text}>
							{this.props.title + '    '}
						</Text>
					</View>
				</View>
      			<Image source = {require('../images/seperator.png') } style = {styles.seperator}></Image>
      		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 46,
		width: Dimensions.get('window').width,
		alignItems: 'center',
		marginTop: 10,
	},
	seperator: {
		height: 14,
		width: Dimensions.get('window').width,
		justifyContent: 'flex-end',
		resizeMode: 'stretch',
	},
	title: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	top: {
		flex: 1,
		flexDirection: 'row',
	},
	text: {
		color: '#00A2E8',
		fontSize: 14,
	}
});


export default StatusBar;
import React, { PropTypes } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Footer = (props) => {


	
	// match styles
  const { textStyle, bodyStyle, viewStyle, buttonStyle, buttonInActiveStyle } = styles;

  

  return (
    <View style={viewStyle}>
    	<TouchableOpacity 
    		onPress= {() => {
                
               props.showAll(props.mylist)
            }}
    		style = {props.filterList? buttonInActiveStyle : buttonStyle}>
    		<Text style = {textStyle}>
               All
            </Text>
    	</TouchableOpacity>
    	<TouchableOpacity 
    		onPress = {() => {
              
               props.showFav(props.mylist, props.mylistFav)
            }}
    		style = {props.filterList? buttonStyle : buttonInActiveStyle}>
    		<Text style = {textStyle}>
               Fav
            </Text>
    	</TouchableOpacity>
    	
	</View>
  );
};

Footer.PropTypes = {
	// footerText: PropTypes.string.isRequired,
	// copyrightText: PropTypes.string.isRequired
};

const styles = {
	viewStyle: {
		
		//backgroundColor: 'gray',
		//alignItems: 'center',
		flexDirection: 'row',
		//justifyContent: 'space-around'
	},
	bodyStyle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	textStyle: {
		fontSize: 12,
		color: '#fff'
	},
	buttonStyle: {
		flex: 1,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
		height: 60
	},
	buttonInActiveStyle: {
		flex: 1,
		backgroundColor: 'gray',
		alignItems: 'center',
		justifyContent: 'center',
		height: 60
	}
};


export default Footer
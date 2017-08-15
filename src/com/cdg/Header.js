import React, { PropTypes } from 'react';
import { Text, View, Switch } from 'react-native';

const Header = (props) => {
	// match styles
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    	<Text style={textStyle}>{props.headerText}</Text>
      	<Switch onTintColor="crimson" onValueChange={props.toggleSwitch} value={props.switchView} />
	</View>
  );
};

Header.PropTypes = {
	headerText: PropTypes.string.isRequired
};

const styles = {
	viewStyle: {
		height: 100,
		backgroundColor: 'white',
		alignItems: 'center',
		 justifyContent: 'center',
		flexDirection: 'column'
	},
	textStyle: {
		fontSize: 16,
		paddingTop: 15,
		color: 'black'
	}
};


export default Header
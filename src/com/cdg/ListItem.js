import React, { PropTypes } from 'react'; 
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'; 


export default class ListItem extends React.Component {

     render() {

        const { textViewStyle, viewStyle, thumbnailStyle, viewFavStyle } = styles; 
        const { artist, image, thumbnail_image, title, url } = this.props.items; 

        return(

            <TouchableOpacity 
                key = {this.props.items.id}   
                onPress = {() => {
                    this.props.actionPlay(this.props.items, this.props.index)
                }}
                style={viewStyle}> 

                <View> 
                    <Image source={{ uri: image }}  style = {thumbnailStyle}/> 
                </View> 
                <View style={textViewStyle}> 
                    <Text>{title}</Text> 
                    <Text>{artist}</Text> 
                </View> 
                <View style={{ 
                    flex:2,
                     alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row', 
                 
                    }}> 
                {this.props.itemFav? <Image source={require('../../../img/ic_favorite_black_36dp.png')}
                style={{width: 36, height: 36}} /> : <Image source={require('../../../img/ic_favorite_border_black_36dp.png')}
                style={{width: 36, height: 36}} />}
                </View> 
                

            </TouchableOpacity> 
        );
    }


}


const styles = StyleSheet.create ({
    viewStyle: { 
        height: 80, 
        padding: 8, 
        flexDirection: 'row', 
        borderWidth: 1, 
        borderColor: '#ddd', 

    }, 

    viewFavStyle: { 
        height: 80, 
        padding: 8, 
        flexDirection: 'row', 
        borderWidth: 1, 
        borderColor: '#ddd', 
        backgroundColor: 'tomato',
    }, 

    textViewStyle: { 
        paddingLeft: 8,
        flexDirection: 'column', 
        justifyContent: 'space-around', 
    }, 
    thumbnailStyle: { 
        height: 50, 
        width: 50, 
    } 
})


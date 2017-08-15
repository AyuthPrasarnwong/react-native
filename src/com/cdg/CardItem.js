import React, { PropTypes } from 'react'; 
import { Text, View, Image, StyleSheet } from 'react-native'; 

export default class CardItem extends React.Component {

   

    render() {

        const { textStyle, viewStyle, thumbnailStyle, imageView, imageStyle } = styles; 

        const { artist, image, title, url, thumbnail_image } = this.props.items; 

        return(

             <View> 
                <View style={viewStyle}> 
                    <View style={textStyle}> 
                        <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} /> 
                    </View> 
                    <View style={textStyle}> 
                        <Text>{title}</Text> 
                        <Text>{artist}</Text> 
                    </View> 
                </View> 
                <View style={imageView}> 
                    <Image style={imageStyle} source={{ uri: image }} /> 
                </View> 
            </View> 

        );
    }

}


const styles  = StyleSheet.create ({
    viewStyle: { 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        borderWidth: 1, 

        borderColor: '#ddd', 
        alignItems: 'center', 
    }, 
    textStyle: { 
        flexDirection: 'column', 
        justifyContent: 'space-around', 
        padding: 5, 
    }, 
    thumbnailStyle: { 
        height: 70, 
        width: 70, 

    }, 
    imageStyle: { 
        height: 300, 
        width: null, 
    }, 
    imageView: { 
        flexDirection: 'column', 
        justifyContent: 'space-around', 
    } 
})

import React, { PropTypes } from 'react'; 
import { StyleSheet, View, Text, WebView, TouchableOpacity } from 'react-native'; 


export default class VideoView extends React.Component {


      itemFav(mylistFav, index) { 
            return mylistFav[index]; 

        }
     render() {
        const { textStyle, viewStyle, buttonStyle, buttonFavStyle, viewHoriStyle } = styles; 
        //const { artist, image, thumbnail_image, title, url } = {props.vdoItem};

      

        return ( 
            <View style={viewStyle}> 
             
                <WebView source= {{uri: this.props.vdoItem.url}}/> 

                <View style={viewHoriStyle}> 

                    <TouchableOpacity 
                        onPress= {() => {
                            if(this.itemFav(this.props.mylistFav, this.props.vdoIndex)){
                                this.props.actionUnFav(this.props.mylistFav, this.props.vdoIndex)
                            } else {
                                this.props.actionFav(this.props.mylistFav, this.props.vdoIndex)
                            }
                        }}
                        style = {buttonFavStyle}>

                        <Text style = {textStyle}>
                           {this.itemFav(this.props.mylistFav, this.props.vdoIndex) ? 'UnFav' : 'AddFav'}
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.actionBack} style = {buttonStyle}>
                        <Text style = {textStyle}>
                           Back
                        </Text>
                    </TouchableOpacity>

                </View> 
                   
            </View> 


        ); 
     }

}




const styles = StyleSheet.create({ 
    viewStyle: { 
        flex:1 ,
        height: null, 

    }, 

    viewHoriStyle: { 
        flexDirection: 'row',
       
    }, 
    webStyle: { 
        height: null, 
        width: null, 
    },
    textStyle: {
        fontSize: 12,
        color: '#fff'
    },
    buttonStyle: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60
    }, 
    buttonFavStyle: {
        flex: 1,
        backgroundColor: 'deeppink',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60
    }, 
}); 


import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import MainList from './MainList';
import VideoView from './VideoView';
import CardItem from './CardItem';
import ListItem from './ListItem';

export default class VdoPage extends React.Component {

    state = { 

        switchView: false,
        isShowAll: true
        
    }


    toggleSwitch = (value) => this.setState({ switchView: value })
    actionAll = (value) => this.setState({ switchView:  true })
    actionFav = (value) => this.setState({ switchView:  false })

  render() {
    return (
      <View style={styles.container}>

        {/*<Header 
            style={styles.header} 
            headerText='VideoView' 
            switchView={this.state.switchView} 
            toggleSwitch={this.toggleSwitch} />*/}

       <VideoView 
            style={styles.body} 
            actionFav={this.props.actionFav}
            actionUnFav={this.props.actionUnFav}
            actionBack={this.props.actionBack} 
            mylistFav={this.props.mylistFav}
            vdoItem={this.props.vdoItem}
            vdoIndex={this.props.vdoIndex} />



        {/*<Footer 
            style={styles.footer} 
            activeButton={this.state.switchView}
            actionAll={this.actionAll} 
            actionFav={this.actionFav}/> */}
        {/* <Footer footerText="GIS Co., Ltd." copyrightText="COPYRIGHT © CDG" actionAll/> */}
        
       
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
   
  },header: {
    flex: 1,
    //backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },footer: {
    flex: 1,
    //backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },body: {
    //flex: 8,
    //backgroundColor: 'powderblue',
   
  },image: {
    flex: 8,
    height: 300
  }
});

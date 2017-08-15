import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import MainList from './MainList';
import VideoView from './VideoView';
import CardItem from './CardItem';
import ListItem from './ListItem';

export default class MainPage extends React.Component {

    state = { 

        switchView: false,
        isShowAll: true,
        list: this.props.mylist
    }


    toggleSwitch = (value) => this.setState({ switchView: value })
    //actionAll = () => this.setState({ switchView:  true })
    //actionFav = () => this.setState({ switchView:  false })
    actionAll = () => this.setState({ switchView:  true })
    actionFav = () => this.setState({ switchView:  false })

    //  componentWillMount() {
    //    this.setState({ list:  this.props.mylist })
    //    console.log(this.state.list);
    // }


  render() {
    return (
      <View style={styles.container}>

        <Header 
            style={styles.header} 
            headerText='Albums' 
            switchView={this.state.switchView} 
            toggleSwitch={this.toggleSwitch} />

        <MainList 

            style={styles.body} 
            actionPlay={this.props.actionPlay}
            isCardView={this.state.switchView} 
            isShowAll={this.state.isShowAll} 
            mylist={this.props.mylist}
            mylistFav={this.props.mylistFav}
            filterList={this.props.filterList}
        />

        <Footer 
            style={styles.footer} 
            activeButton={this.state.switchView}
            showFav={this.props.showFav}
            showAll={this.props.showAll}
             mylist={this.props.mylist}
            mylistFav={this.props.mylistFav}
            actionAll={this.actionAll} 
            actionFav={this.actionFav}
            filterList={this.props.filterList}
        />
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
    flex: 8,
    //backgroundColor: 'powderblue',
   
  },image: {
    flex: 8,
    height: 300
  }
});

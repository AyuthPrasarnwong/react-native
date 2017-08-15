import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from './src/com/cdg/Header';
import Footer from './src/com/cdg/Footer';
import MainList from './src/com/cdg/MainList';
import VideoView from './src/com/cdg/VideoView';
import CardItem from './src/com/cdg/CardItem';
import ListItem from './src/com/cdg/ListItem';
import MainPage from './src/com/cdg/MainPage';
import VdoPage from './src/com/cdg/VdoPage';

export default class App extends React.Component {

    state = { 

        switchView: false,
        currentPage: 'home',
        currentVDO: {},
        mylist: [],
        mylistFav: [],
        currentVDOIndex: 0,
        filterList: false
    }

    url = 'https://react-native-91281.firebaseio.com/mydata.json';


    fetchData() {
        fetch(this.url)
        .then((response) => response.json())
        .then((mydata) => {
            //console.log(mydata)
            this.setState({
                mylist: mydata,
                mylistFav: mydata.map(mylist => false)

            });
        })
    }

    componentWillMount() {
        this.fetchData()
            // axios.get('https://react-native-91281.firebaseio.com/mydata.json')
            // .then(response => console.log(response));
    }

    actionPlay = (item, index) => {
        this.setState({currentPage: 'play'})
        this.setState({currentVDO: item})
        this.setState({currentVDOIndex: index})
    }

    actionBack = () => this.setState({currentPage: 'home'});

    actionFav  = (mylistFav, index) => {
        mylistFav[index] = true;
        var arrayFav = mylistFav;
        this.setState({mylistFav: arrayFav})
         //console.log(mylistFav)
    }

    actionUnFav  = (mylistFav, index) => {
        mylistFav[index] = false;
        var arrayFav = mylistFav;
        this.setState({mylistFav: arrayFav})
         //console.log(mylistFav)
    }

    showFav = () => {
     
        this.setState({filterList: true})

    }


    showAll = () => {
        this.setState({filterList: false})
        
    }
   

    renderPage(){
        if(this.state.currentPage === 'home'){
            return (<MainPage 
                        filterList={this.state.filterList} 
                        actionPlay={this.actionPlay}
                        showFav={this.showFav}
                        showAll={this.showAll}
                        mylist={this.state.mylist}
                        mylistFav={this.state.mylistFav}
                    />)
        } else if (this.state.currentPage === 'play') {
            return (<VdoPage 
                         mylistFav={this.state.mylistFav}
                        actionBack={this.actionBack} 
                        vdoItem={this.state.currentVDO} 
                        vdoIndex={this.state.currentVDOIndex} 
                        actionFav={this.actionFav} 
                        actionUnFav={this.actionUnFav} 
                    />)
        }
    }

  render() {
    return (
      <View style={styles.container}>
        {/*

        <Header headerText='React Native' switchView={this.state.switchView} toggleSwitch={this.toggleSwitch} />
     
        

        <View style={styles.body}>
            <MainList isCardView={this.state.switchView}/>
        </View>

         <Footer footerText="GIS Co., Ltd." copyrightText="COPYRIGHT © CDG" actionAll/> 

        */}

       {this.renderPage()}
        
       
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

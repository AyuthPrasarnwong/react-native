import React, { Component } from 'react';
import { Text, View, ScrollView} from 'react-native';
import CardItem from './CardItem';
import ListItem from './ListItem';

//import axios from 'axios';


class MainList extends Component {

	state = { 
		mylist: [],
		mylistFav: []
		
	}

	// url = 'https://react-native-91281.firebaseio.com/mydata.json';


	// fetchData() {
	// 	fetch(this.url)
	// 	.then((response) => response.json())
	// 	.then((mydata) => {
	// 		console.log(mydata)
	// 		this.setState({
	// 			mylist: mydata,
	// 			mylistFav: mydata.map(mylist => false)

	// 		});
	// 	})
	// }

	// componentWillMount() {
	// 	this.fetchData()
	// 		// axios.get('https://react-native-91281.firebaseio.com/mydata.json')
	// 		// .then(response => console.log(response));
	// }

	setFav(index) {
		//this.state.mylistFav[index] = true
		//console.log(this.state.mylistFav)
	}

	renderList() {
		const isCardView = this.props.isCardView; 

		const isFilter = this.props.filterList; 
		const mylistFav = this.props.mylistFav;
        if (isCardView) { 
            return this.props.mylist.map( (mylist, index) => 
                <CardItem 
                	actionPlay={this.props.actionPlay}
                	actionFav={this.setFav(index)}
                	key={mylist.title} 
                	items={mylist} 
                	index={index}
                	itemFav={this.props.mylistFav[index]}/>) 
        } else { 

        	if(isFilter) {

        		var mylistFilter = this.props.mylist.filter( function(item, index){

		            if(mylistFav[index] == true) {
		                return item;
		            }
		            
		            
		        });

        		return mylistFilter.map( (mylist, index) => 
        		 <ListItem 
                	actionPlay={this.props.actionPlay} 
                	actionFav={this.setFav(index)}
                	key={mylist.title} 
                	items={mylist} 
                	index={index}
                	itemFav={mylist} />) 

        	} else {

        		return this.props.mylist.map((mylist, index) => 

                <ListItem 
                	actionPlay={this.props.actionPlay} 
                	actionFav={this.setFav(index)}
                	key={mylist.title} 
                	items={mylist} 
                	index={index}
                	itemFav={this.props.mylistFav[index]} />) 

        	}
            
        }
	}


	render() {
		return(

			 <ScrollView> 
                {this.renderList()} 
            </ScrollView>

		);
	}

  

}

export default MainList;
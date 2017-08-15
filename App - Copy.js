import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 30, paddingTop: 15, color: '#fff'}}>Header</Text>
        </View>
        <View style={styles.body}>
            <View style={{ flex: 1, flexDirection: 'row',  justifyContent: 'center'}}>
                <View style={{ flex: 1}} />
                <Image 
                    style={styles.image} 
                    source = {{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} />
                <View style={{ flex: 1}} />
             
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={{ fontSize: 30, paddingTop: 15, color: '#fff'}}>Footer</Text>
        </View>
        
       
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },header: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },footer: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },body: {
    flex: 8,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },image: {
    flex: 8,
    height: 300
  }
});

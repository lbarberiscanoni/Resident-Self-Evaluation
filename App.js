import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDO4gQiWkeNAxllb-nXWDr74vemGMRQBbw",
  authDomain: "georgetown-memorial.firebaseapp.com",
  databaseURL: "https://georgetown-memorial.firebaseio.com",
  projectId: "georgetown-memorial",
  storageBucket: "georgetown-memorial.appspot.com",
  messagingSenderId: "633749216180",
  appId: "1:633749216180:web:e1f318a5a37df142"
};
firebase.initializeApp(config);

export default class App extends React.Component {

  constructor() {
      super();
      let rootRef = firebase.database().ref().child("eval");
      this.itemsRef = rootRef;
      this.state = {
          location: "home",
      };
      this.listenForItems(this.itemsRef);

  }

  listenForItems(itemsRef) {
    itemsRef.once("value").then((snapshot) => {
      console.log(Object.keys(snapshot.val()))
        // let navList = snap.val()[0]["Manual"]

        // this.setState({
        //     "table_of_contents": navList
        // });
    });
  }

  render() {
    return(
      <View style={styles.container}>
      <Text>What is this?</Text>
      </View>
    );   
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

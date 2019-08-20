import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from "firebase";
import Question from "./Question";


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

export default class App extends Component {

  constructor() {
      super();
      let rootRef = firebase.database().ref().child("eval");
      this.itemsRef = rootRef;
      this.state = {
        size: 1,
        username: "lorenzo",
        userId: "asd",
        location: "home",
      };
      this.listenForItems(this.itemsRef);

  }

  listenForItems(itemsRef) {
    itemsRef.child("questions").once("value").then((snapshot) => {
      this.setState({
        "questions": snapshot.val()
      })
    });
  }

  generateForm() {
    let allQuestions = []
    if (this.state.questions) { 
      Object.keys(this.state.questions).map((key) => {
        allQuestions.push(<Question ob={ this.state.questions[key] } key={ key } />)
      })
    } else {
      allQuestions = [<Text>Test</Text>]
    }

    console.log(allQuestions.length)

    return allQuestions
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    switch(this.state.location) {
      case "login": 
        return(
          <View style={styles.container}>
          <Text>Login</Text>
          </View>
        ); 
      case "home": 
        return(
          <View style={styles.container}>
            { this.generateForm() }
          </View>
        ); 
    }  
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

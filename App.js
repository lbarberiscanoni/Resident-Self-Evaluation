import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from "firebase";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCVj9ZWunoXIGOT08Qw8XF9qiS_TTnsP8A",
    authDomain: "stanford-heart-surgery.firebaseapp.com",
    databaseURL: "https://stanford-heart-surgery.firebaseio.com",
    projectId: "stanford-heart-surgery",
    storageBucket: "stanford-heart-surgery.appspot.com",
    messagingSenderId: "856277829656"
};
firebase.initializeApp(config);

export default class App extends React.Component {
  constructor() {
        super();
        let rootRef = firebase.database().ref();
        this.itemsRef = rootRef;
        this.state = {
            location: "home",
        };
    }

  listenForItems(itemsRef) {
    itemsRef.once("value").then((snap) => {
        // let navList = snap.val()[0]["Manual"]

        // this.setState({
        //     "table_of_contents": navList
        // });
    });
  }

  componentWillMount() {
      this.listenForItems(this.itemsRef);
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

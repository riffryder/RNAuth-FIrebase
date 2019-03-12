import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
} from '../config'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey, 
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId,
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Header headerText="authentication"></Header>
        <LoginForm />
      </View>
    );
  }
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
}

export default App;
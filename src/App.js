import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { CardSection, Button, Header, Spinner } from './components/common';
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
  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey, 
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId,
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
          );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    };
  }


  render() {
    return(
      <View style={styles.container}>
        <Header headerText="authentication"></Header>
        {this.renderContent()}
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
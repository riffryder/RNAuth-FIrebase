import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Header headerText="authentication"></Header>
        <Text>An App</Text>
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
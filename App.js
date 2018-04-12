import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Content} from 'native-base';
import AppFooter from './components/AppFooter.js';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            <Text>
              Text  
            </Text>
          </View>
        </Content>
        <AppFooter/>
      </Container>
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

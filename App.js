import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './components/Deck'
import MainView from './components/MainView'
import { StackNavigator } from 'react-navigation'

const Stack = StackNavigator({
    MainView: {
        screen: MainView,
        navigationOptions: {
          title: 'Main View'
        }
      },
    Deck: {
      screen: Deck,
      navigationOptions:({navigation}) =>({
        title:navigation.state.params.title
      })
    }
})
export default class App extends React.Component {

  componentDidMount() {
    console.log("we are in the app.js")
  }
  render() {
    return (
      <View style={styles.container}>
        <Stack/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



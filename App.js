import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {addDecks,setLocalNotification,clearLocalNotification} from './utils/helpers'
import thunk from 'redux-thunk'
import reducer from './reducers'
import {applyMiddleware,createStore,compose} from 'redux'
import {Provider} from 'react-redux'
import {addDecksAsync} from './actions/decks'
import Stack from './utils/navigation'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default class App extends React.Component {
  
  componentWillMount() {
    store.dispatch(addDecksAsync({decks:tempDeck}))
  }

  componentDidMount() {
     setLocalNotification()
  }
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Stack/>
        </Provider>
      </View>
    );
  }
}

const tempDeck = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



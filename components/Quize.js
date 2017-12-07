import React, {Component} from 'react'
import {View,Text, TouchableOpacity, ScrollView,Animated} from 'react-native'
import {NavigationActions} from 'react-navigation'
import QuestionCard from './QuestionCard'
import {setLocalNotification,clearLocalNotification} from '../utils/helpers'
import QuizeResult from './QuizeResult'
import styles from '../styles/quizeStyle'
class Quize extends Component {
  constructor(props){
    super(props);
    this.restartTheQuize=this.restartTheQuize.bind(this);
    this.backToDeck=this.backToDeck.bind(this);
  }
  state = {
    currentIndex: 0,
    correct: 0,
    wrong: 0,
    currentQuestion: {},
    complete: false,
  };
  componentDidMount() {
    this.setState(() => ({
      currentQuestion: this.props.navigation.state.params.deck.questions[0]
    }));
  }

  goToNextQuestion({ res }) {
    const complete =
      this.props.navigation.state.params.deck.questions.length ===
      this.state.currentIndex + 1
        ? true
        : false;
    this.setState(preState => ({
      ...preState,
      currentIndex: preState.currentIndex + 1,
      currentQuestion: this.props.navigation.state.params.deck.questions[
        preState.currentIndex + 1
      ],
      complete,
      [res]: preState[res] + 1
    }));
  }

  restartTheQuize() {
    this.setState(() => ({
      correct: 0,
      wrong: 0,
      currentIndex: 0,
      currentQuestion: this.props.navigation.state.params.deck.questions[0],
      complete: false,
    }));
  }

  backToDeck(){
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    const { deck } = this.props.navigation.state.params;
    const { currentIndex, currentQuestion, complete } = this.state;
    if (!complete) {
      return (
        <View style={styles.container}>
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              {currentIndex + 1} / {deck.questions.length}
            </Text>
          </View>
          <View
            style={styles.cardContainer}
            >
            <QuestionCard
            question={currentQuestion}
            onNextQuestion={({res}) => this.goToNextQuestion({res})}
            />
          </View>
        </View>
      );
    } else {
      {
        clearLocalNotification()
          .then(() => {
            setLocalNotification();
        })
      }
      return <View style={{ flex: 1 }}>
      <QuizeResult
      correct={this.state.correct}
      wrong={this.state.wrong}
      onRestartTheQuize={this.restartTheQuize}
      onBackToDeck={this.backToDeck}
      />
      
      </View>;
    }
  }
}

export default Quize
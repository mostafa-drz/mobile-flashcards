import React, {Component} from 'react'
import {View,Text, TouchableOpacity, ScrollView,Animated} from 'react-native'
import {NavigationActions} from 'react-navigation'
import QuestionCard from './QuestionCard'
import {setLocalNotification,clearLocalNotification} from '../utils/helpers'
class Quize extends Component {
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

  renderResult() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 50, marginRight: 50 }}>{`❤️ ${
            this.state.correct
          }`}</Text>
          <Text style={{ fontSize: 50, marginLeft: 50 }}>{`💔 ${
            this.state.wrong
          }`}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.restartTheQuize()}
            style={{
              marginTop: 40,
              marginBottom: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#9cdba4",
              width: 300,
              height: 80
            }}
          >
            <Text style={{ fontSize: 20 }}>Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.dispatch(NavigationActions.back())
            }
            style={{
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00ccff",
              height: 80
            }}
          >
            <Text style={{ fontSize: 20 }}>Back To The Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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

  render() {
    const { deck } = this.props.navigation.state.params;
    const { currentIndex, currentQuestion, complete } = this.state;
    if (!complete) {
      return (
        <View style={{ flex: 1 }}>
          <View style={{alignSelf:'center',marginTop:10}}>
            <Text style={{ fontSize: 30 }}>
              {currentIndex + 1} / {deck.questions.length}
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
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
      return <View style={{ flex: 1 }}>{this.renderResult()}</View>;
    }
  }
}

export default Quize
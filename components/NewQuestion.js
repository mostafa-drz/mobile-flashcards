import React, { Component } from 'react'
import { Text, View, TextInput,Keyboard, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback,StyleSheet } from 'react-native'
import {addNewQuestionAsync} from '../actions/decks'
import {connect} from 'react-redux'
import {NavigationActions} from 'react-navigation'
import styles from '../styles/newQuestionStyle'
class NewQuestion extends Component {
    state = {
        question: '',
        answer:''
    }

    submitNewQuestion(){
        const {deck}=this.props.navigation.state.params
        this.props.addNewQuestionAsync({deckName:deck,question:{question:this.state.question,answer:this.state.answer}})
        this.props.navigation.dispatch(NavigationActions.back())
    }

    render() {
        return(
            <View style={styles.container}>
              <View style={styles.inputContainer}>
                <TextInput style={styles.txtInput} multiline={true} placeholder="Question.." value={this.state.question} onChangeText={question => this.setState(
                      () => ({ question })
                    )} underlineColorAndroid="transparent" />
                <TextInput style={styles.txtInput} multiline={true} placeholder="Answer.." value={this.state.answer} onChangeText={answer => this.setState(
                      () => ({ answer })
                    )} underlineColorAndroid="transparent" />
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnAdd} onPress={() => this.submitNewQuestion()}>
                  <Text style={styles.btnAddText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>)
    }
}


export default connect(null,{addNewQuestionAsync})(NewQuestion)
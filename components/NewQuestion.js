import React, { Component } from 'react'
import { Text, View, TextInput,Keyboard, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import {addNewQuestionAsync} from '../actions/decks'
import {connect} from 'react-redux'
import {NavigationActions} from 'react-navigation'
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
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput style={{ height: 200, width: 400, borderColor:'#21396b',borderWidth:1,marginBottom:10,padding:10,fontSize:20}} multiline={true} placeholder='Question..' value={this.state.question}
                            onChangeText={(question) => this.setState(() => ({question}))}
                        />
                        <TextInput style={{ height: 200, width: 400, borderColor: '#21396b', borderWidth: 1,marginBottom:10,padding:10,fontSize:20}} multiline={true} placeholder='Answer..' value={this.state.answer}
                            onChangeText={(answer) => this.setState(() =>({answer}))}
                        />
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}
                            onPress={() => this.submitNewQuestion()}
                        >
                            <Text style={{ width: 200, fontSize: 30,textAlign:'center',textAlignVertical:'center', backgroundColor:'#b6d6bf',marginBottom:100,padding:10,borderRadius:5}}>Add</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        )
    }
}

export default connect(null,{addNewQuestionAsync})(NewQuestion)
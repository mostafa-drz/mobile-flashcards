import React, {Component} from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import {NavigationActions} from 'react-navigation'
class Quize extends Component{
    state={
        currentIndex:0,
        correct:0,
        wrong:0,
        hiddenAnswer:true,
        currentQuestion:{},
        complete:false
    }
    componentDidMount() {
        this.setState(() => ({
            currentQuestion:this.props.navigation.state.params.deck.questions[0]
        }))
    }

    renderQuestionCard(question){
        if(question && question.question && question.answer)
        {
        return <View key={`question${Math.random()
              .toString(32)
              .slice(0, 4)}`} style={{ width: 300, justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text
              style={{ fontSize: 20, marginBottom: 10, width: 400 }}
            >
              {question.question}
            </Text>
            {this.state.hiddenAnswer && <Text
                style={{
                  backgroundColor: "#111",
                  fontSize: 20,
                  marginTop: 20,
                  width: 400,
                  height:300
                }}
              >
                {question.answer}
              </Text>}
            {!this.state.hiddenAnswer && <Text
                style={{ fontSize: 20, marginTop: 20, width: 400,height:300 }}
              >
                {question.answer}
              </Text>}
            <TouchableOpacity onPress={() => {
                this.setState(() => ({ hiddenAnswer: false }));
              }}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  marginTop: 30,
                  backgroundColor: "#274374",
                  color: "#f4f7f7",
                  width: 200,
                  height: 50,
                  paddingVertical: 10
                }}
              >
                Show The Answer
              </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row",justifyContent:'space-between', marginRight: 100, marginTop: 150 }}>
              <TouchableOpacity style={{ backgroundColor: "#118a29",marginLeft:80 }} onPress={()=>{
                  this.goToNextQuestion({res:'correct'});
              }}>
                <Text style={{ color: "#f4f7f7", fontSize: 20, textAlign: "center", width: 200, height: 50, paddingVertical: 10 }}>
                  Correct ❤️
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: "#f0082d",marginLeft:150 }} onPress={() => {
                  this.goToNextQuestion({res:'wrong'});
              }}>
                <Text style={{ color: "#f4f7f7", fontSize: 20, textAlign: "center", width: 200, height: 50, paddingVertical: 10 }}>
                  Incorrect 💔
                </Text>
              </TouchableOpacity>
            </View>
          </View>}else{
              return(
                  <View><Text>Nothing</Text></View>
              )
          }
    }

    renderResult(){
        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 50, marginRight: 50 }}>{`❤️ ${this.state.correct}`}</Text>
              <Text style={{ fontSize: 50, marginLeft: 50 }}>{`💔 ${this.state.wrong}`}</Text>
            </View>
            <View>
              <TouchableOpacity 
              onPress={() => this.restartTheQuize()}
              style={{ marginTop: 40, marginBottom: 40, justifyContent: "center", alignItems: "center", backgroundColor: "#9cdba4", width: 300,height:80 }}>
                <Text style={{ fontSize: 20 }}>Try Again</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
              style={{width:300,justifyContent: "center", alignItems: "center", backgroundColor: "#00ccff",height:80 }}>
                <Text style={{ fontSize: 20 }}>Back To The Deck</Text>
              </TouchableOpacity>
            </View>
          </View>;
    }
    goToNextQuestion({res}){
        const complete=this.props.navigation.state.params.deck.questions.length===this.state.currentIndex+1 ? true : false
        this.setState((preState) => ({
            ...preState,
            currentIndex:preState.currentIndex+1,
            currentQuestion:this.props.navigation.state.params.deck.questions[preState.currentIndex+1],
            hiddenAnswer:true,
            complete,
            [res]:preState[res]+1
        }))
    }
    
    restartTheQuize(){
        this.setState(() =>({
            correct:0,
            wrong:0,
            currentIndex:0,
            currentQuestion:this.props.navigation.state.params.deck.questions[0],
            complete:false,
            hiddenAnswer:true
        }))
    }

    render(){
        const {deck}=this.props.navigation.state.params
        const {currentIndex,currentQuestion,complete}=this.state
        if(!complete)
        {
          return( <View style={{flex:1}}>
            <View style={{position:'absolute',top:200,left:100}}>
                <Text style={{fontSize:30}}>{currentIndex+1} / {deck.questions.length}</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                {this.renderQuestionCard(currentQuestion)}
            </View>
           </View>)
        }
        else{
            return <View style={{flex:1}}>
                {this.renderResult()}
              </View>;
        }
    
    }
}

export default Quize
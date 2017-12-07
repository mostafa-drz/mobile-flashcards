import React,{Component} from 'react'
import {View,Text,ScrollView,TouchableOpacity,Animated,StyleSheet} from 'react-native'
import styles from '../styles/questionCardStyle'
class QuestionCard extends Component {
    constructor(props){
        super(props);
    }
  state = {
    hiddenAnswer: true,
    btnCaption: ["Hide The Answer", "Show The Answer"]
  };

  componentWillMount = () => {
    this.animatedValue=new Animated.Value(0)
    this.value=0
    this.animatedValue.addListener(({value}) =>{
        this.value=value
    })
    this.questionInterpolate=this.animatedValue.interpolate({
        inputRange:[0,180],
        outputRange:['0deg','180deg'],
    })
    this.answerInterpolate=this.animatedValue.interpolate({
        inputRange:[0,180],
        outputRange:['180deg','360deg']
    })
  }

  flipCard(){
      if(this.value>=90){
          Animated.spring(this.animatedValue,{
              toValue:0,
              friction:8,
              tension:10
          }).start()
      }else{
          Animated.spring(this.animatedValue,{
              toValue:180,
              friction:8,
              tension:10,
          }).start()
      }
  }
  
  render() {
      const questionAnimatedStyle={transform:[{rotateY:this.questionInterpolate}]}
      const answerAnimatedStyle={transform:[{rotateY:this.answerInterpolate}]}
    const { question,onNextQuestion } = this.props;
    return <View key={`question${Math.random()
          .toString(32)
          .slice(0, 4)}`} style={[styles.container]}>
        <View style={styles.cardContainer}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={false} style={{flex:4}}>
            <Animated.View style={[styles.card,styles.questionCard,questionAnimatedStyle]}>
              <Text style={styles.questionText}>{question.question}</Text>
            </Animated.View>
            <Animated.View style={[styles.card, styles.answerCard, answerAnimatedStyle]}>
              <Text style={styles.answerText}>{question.answer}</Text>
            </Animated.View>
          </ScrollView>
          <View style={{flex:-1}}>
            <TouchableOpacity style={[styles.btn]} onPress={() => {
                this.setState(preState => ({
                  hiddenAnswer: !preState.hiddenAnswer
                }));
                this.flipCard();
              }}>
              <Text style={styles.btnShowHideText}>
                {this.state.btnCaption[+this.state.hiddenAnswer]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={[styles.btnCorrect, styles.btn]} onPress={() => {
              this.setState(() => ({ hiddenAnswer: true }));
              onNextQuestion({ res: "correct" });
            }}>
            <Text style={styles.btnCorrectText}>Correct ❤️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnIncorrect, styles.btn]} onPress={() => {
              this.setState(() => ({ hiddenAnswer: true }));
              onNextQuestion({ res: "wrong" });
            }}>
            <Text style={styles.btnIncorrectText}>Incorrect 💔</Text>
          </TouchableOpacity>
        </View>
      </View>;
  }
}



export default QuestionCard

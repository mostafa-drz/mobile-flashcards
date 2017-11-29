import React,{Component} from 'react'
import {View,Text,ScrollView,TouchableOpacity,Animated,StyleSheet} from 'react-native'
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
    return <View key={`question${Math.random().toString(32).slice(0, 4)}`} style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={false}>
          <Animated.View style={[styles.card,questionAnimatedStyle,styles.questionCard]}>
            <Text style={styles.questionText}>{question.question}</Text>
          </Animated.View>
          <Animated.View style={[styles.card,styles.answerCard,answerAnimatedStyle]}>
            <Text style={styles.answerText}>{question.answer}</Text>
          </Animated.View>
        </ScrollView>
        <TouchableOpacity style={[styles.btn]} 
            onPress={() => {
                this.setState(preState => ({
                hiddenAnswer: !preState.hiddenAnswer
                }));
                this.flipCard()
          }}>
          <Text style={styles.btnShowHideText}>
            {this.state.btnCaption[+this.state.hiddenAnswer]}
          </Text>
        </TouchableOpacity>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={[styles.btnCorrect,styles.btn]} onPress={() => {
              this.setState(() => ({ hiddenAnswer: true }));
              onNextQuestion({ res: "correct" });
            }}>
            <Text style={styles.btnCorrectText}>Correct ❤️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnIncorrect,styles.btn]} onPress={() => {
              this.setState(() => ({ hiddenAnswer: true }));
              onNextQuestion({ res: "wrong" });
            }}>
            <Text style={styles.btnIncorrectText}>Incorrect 💔</Text>
          </TouchableOpacity>
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backfaceVisibility:'hidden'
  },
  card: {
    flex: 1,
    width: 400,
    marginTop: 280,
    backfaceVisibility: "hidden",
    padding:10,
    height:200,
    borderRadius:4
  },
  questionCard: {
    backgroundColor: "#00bfff"
  },
  questionText: {
    fontSize: 20,
  },
  answerCard: {
    backgroundColor: "#95e495",
    position: "absolute",
    top: 0
  },
  answerText: {
    fontSize: 20,
  },
  btnShowHideText: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#274374",
    color: "#f4f7f7",
    width: 200,
    height: 50,
    paddingVertical: 10
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 100,
    marginBottom: 150,
    marginTop: 100
  },
  btnCorrect: {
    backgroundColor: "#118a29",
    marginLeft: 80
  },
  btnCorrectText: {
    color: "#f4f7f7",
    fontSize: 20,
    textAlign: "center",
    width: 200,
    height: 50,
    paddingVertical: 10
  },
  btnIncorrect: {
    backgroundColor: "#f0082d",
    marginLeft: 150
  },
  btnIncorrectText: {
    color: "#f4f7f7",
    fontSize: 20,
    textAlign: "center",
    width: 200,
    height: 50,
    paddingVertical: 10
  }
});

export default QuestionCard

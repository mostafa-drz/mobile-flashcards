import React,{Component} from 'react'
import {FlatList,TouchableOpacity,Text,View,StyleSheet} from 'react-native'
import {containerBackColor,deckThumbBorderColor,deckThumbBackColor,deckCardCountColor} from '../utils/colors'

class MainView extends Component{
    state={
        decks:[
            {
                key: 'React',
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
            {
                key: 'JavaScript',
                title: 'JavaScript',
                questions: [
                    {
                        question: 'What is a closure?',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.'
                    }
                ]
            },
            {
                key: 'Redux',
                title: 'Redux',
                questions: [
                    {
                        question: 'What is a closure?',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.'
                    }
                ]
            },
            {
                key: 'Native',
                title: 'Native',
                questions: [
                    {
                        question: 'What is a closure?',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.'
                    }
                ]
            },
            {
                key: 'Css',
                title: 'Css',
                questions: [
                    {
                        question: 'What is a closure?',
                        answer: 'The combination of a function and the lexical environment within which that function was declared.'
                    }
                ]
            }
        ]
    }
    renderDeck(deck){
        console.log(deck)
        return(
            <View style={{flex:1}}>
                <TouchableOpacity style={styles.deckBtn} onPress={() => {this.props.navigation.navigate('Deck',{...deck,title:deck.title})}}>
                    <Text style={styles.deckTitle}>{deck.title}</Text>
                    <Text style={styles.deckCardCount}>{deck.questions.length} {deck.questions.length<2 ? 'card' : 'cards'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    // componentWillMount() {
    //     const decksArray=[]
    //     Object.keys(decks).map((key) => {
    //         decksArray.concat({
    //             key:key,
    //             ...decks[key]
    //         })
    //     })
    //     this.setState(() =>({
    //         decks:decksArray
    //     }))
    // }
    render(){
        return(
            <View style={styles.container}>
                <FlatList showsVerticalScrollIndicator={false} data={this.state.decks} renderItem={({item}) => this.renderDeck(item)}/>
            </View>
        )
    }   
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: containerBackColor,
        padding:20
    },
    deckBtn:{
        flex:1,
        width:350,
        marginBottom:30,
        marginTop:30,
        alignItems:'center',
        borderRadius:5,
        borderColor:deckThumbBorderColor,
        backgroundColor:deckThumbBackColor,
        padding:30
    },
    deckTitle:{
        flex:1,
        marginBottom:1,
        fontWeight:'bold',
        fontSize:50,
    },
    deckCardCount:{
        flex:1,
        fontSize:25,
        fontStyle:'italic',
        color:deckCardCountColor
    }
})

const decks = [
    {
        key:'React',
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
    {
        key:'JavaScript',
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
   {    
        key:'Redux',
        title: 'Redux',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
   {
       key:'Native',
        title: 'Native',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
    {
        key:'Css',
        title: 'Css',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
]
export default MainView
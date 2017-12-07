import React,{Component} from 'react'
import {TextInput,TouchableOpacity,Text,StyleSheet,View} from 'react-native'
import {connect} from 'react-redux'
import {addNewDeckAsync} from '../actions/decks'
import {NavigationActions} from 'react-navigation'
import styles from '../styles/newDeckStyle'
class NewDeck extends Component{
    state={
        deckName:'',
    }

    async addDeck(){
        await this.props.addNewDeckAsync({name:this.state.deckName})
        this.props.navigation.navigate("Deck",{
          key:this.state.deckName,
          title:this.state.deckName
        })
    }
    render(){
        return( <View style={styles.container}>
            <TextInput placeholder='Deck Name' style={styles.input} value={this.state.deckName} onChangeText={(text) => this.setState(() => ({deckName:text}))}/>
            <TouchableOpacity style={styles.btnAdd} onPress={() => this.addDeck()}>
                <Text style={styles.btnText}>Add the deck</Text>
            </TouchableOpacity>
       </View>)
    }
}

export default connect(null,{addNewDeckAsync})(NewDeck)
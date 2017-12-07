import React,{Component} from 'react'
import {FlatList,TouchableOpacity,Text,View} from 'react-native'
import {getAllDecks} from '../utils/helpers'
import {connect} from 'react-redux'
import {Ionicons} from '@expo/vector-icons'
import styles from '../styles/mainViewStyle'
class MainView extends Component {

  renderDeck(deck) {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.deckBtn}
          onPress={() => {
            this.props.navigation.navigate("Deck", {
              ...deck,
              title: deck.title
            });
          }}
        >
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.deckCardCount}>
            {deck.questions.length}{" "}
            {deck.questions.length < 2 ? "card" : "cards"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
    (<View style={styles.container}>
        <View style={styles.decksList}>
          <FlatList showsVerticalScrollIndicator={false} data={this.props.decks} renderItem={({ item }) => this.renderDeck(item)} />
        </View>
        <TouchableOpacity style={styles.btnAddNewDeck} onPress={() => {this.props.navigation.navigate('NewDeck')}}>
            <Ionicons name="ios-add-circle" size={130} color={"#777"} style={styles.btnNewDeckIcon}/>
        </TouchableOpacity>
    </View>)
    )
  }
}


function mapStateToProps(state){
    return{
        decks:state.decks.decks
    }
}
export default connect(mapStateToProps)(MainView)
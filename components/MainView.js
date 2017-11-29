import React,{Component} from 'react'
import {FlatList,TouchableOpacity,Text,View,StyleSheet} from 'react-native'
import {containerBackColor,deckThumbBorderColor,deckThumbBackColor,deckCardCountColor} from '../utils/colors'
import {getAllDecks} from '../utils/helpers'
import {connect} from 'react-redux'
import {Ionicons} from '@expo/vector-icons'
import NewDeck from './NewDeck'
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
        <TouchableOpacity style={{width:120,height:120,alignSelf:'flex-end'}} onPress={() => {this.props.navigation.navigate('NewDeck')}}>
            <Ionicons name="ios-add-circle" size={130} color={"#777"} style={styles.btnNewDeck}/>
        </TouchableOpacity>
    </View>)
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  decksList: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  deckBtn: {
    flex: 1,
    width: 350,
    marginBottom: 30,
    marginTop: 30,
    alignItems: "center",
    borderRadius: 5,
    borderColor: deckThumbBorderColor,
    backgroundColor: deckThumbBackColor,
    padding: 30
  },
  deckTitle: {
    flex: 1,
    marginBottom: 1,
    fontWeight: "bold",
    fontSize: 50
  },
  deckCardCount: {
    flex: 1,
    fontSize: 25,
    fontStyle: "italic",
    color: deckCardCountColor
  },
  btnNewDeck: {
    color: "#A6373F",
  }
});
function mapStateToProps(state){
    return{
        decks:state.decks.decks
    }
}
export default connect(mapStateToProps)(MainView)
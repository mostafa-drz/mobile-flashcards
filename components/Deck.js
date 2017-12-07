import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import styles from '../styles/deckStyle'
import {connect} from 'react-redux'

class Deck extends Component {
  render() {
    return (
        <View
          style={styles.container}
        >
          <Text style={styles.txtHeader}>
            {this.props.deck.questions.length}{" "}
            <MaterialCommunityIcons name="cards-outline" size={100} />
          </Text>
          <TouchableOpacity
            disabled={!this.props.deck.questions || !this.props.deck.questions.length>0}
            style={styles.btn}
            onPress={() => {this.props.navigation.navigate('Quize',{deck:this.props.deck,title:this.props.deck.title})}}
          >
            <Text style={styles.btnText}>Start Quize</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              this.props.navigation.navigate("NewQuestion", {
                deck: this.props.navigation.state.params.key
              });
            }}
          >
            <Text style={styles.btnText}>Add New card</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
function mapStateToProps(state,ownProps){
    const newProps={
        deck:state.decks.decks.filter((deck) => deck.key===ownProps.navigation.state.params.key)[0]}
    return newProps;
}
export default connect(mapStateToProps)(Deck)

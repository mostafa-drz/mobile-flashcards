import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import {connect} from 'react-redux'

class Deck extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 100 }}>
            {this.props.deck.questions.length}{" "}
            <MaterialCommunityIcons name="cards-outline" size={100} />
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#5a667a",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              width: 300,
              marginBottom: 10
            }}
            onPress={() => {this.props.navigation.navigate('Quize',{deck:this.props.deck,title:this.props.deck.title})}}
          >
            <Text style={{ fontSize: 20, color: "#f2f2f2" }}>Start Quize</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#5a667a",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              width: 300,
              marginBottom: 10
            }}
            onPress={() => {
              this.props.navigation.navigate("NewQuestion", {
                deck: this.props.navigation.state.params.key
              });
            }}
          >
            <Text style={{ fontSize: 20, color: "#f2f2f2" }}>Add New card</Text>
          </TouchableOpacity>
        </View>
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

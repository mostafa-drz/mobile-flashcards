import React,{Component} from 'react'
import {TextInput,TouchableOpacity,Text,StyleSheet,View} from 'react-native'
import {connect} from 'react-redux'
import {addNewDeckAsync} from '../actions/decks'
import {NavigationActions} from 'react-navigation'
class NewDeck extends Component{
    state={
        deckName:'',
    }

    addDeck(){
        this.props.addNewDeckAsync({name:this.state.deckName})
        this.props.navigation.dispatch(NavigationActions.back())
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 100,
    width: 400,
    fontSize: 25,
    fontWeight: "500",
    padding: 10,
    borderWidth: 2,
    marginBottom: 10,
    marginTop: 10,
    borderColor: "#777"
  },
  btnAdd: {
    alignItems:'center',
    justifyContent:'center',
    height: 100,
    width: 300,
    backgroundColor: "#87ceeb",
    borderRadius:5,
  },
  btnText: {
    fontSize: 30
  }
});
export default connect(null,{addNewDeckAsync})(NewDeck)
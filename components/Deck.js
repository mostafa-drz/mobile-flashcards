import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
export default class Deck extends Component {
    componentDidMount() {
        console.log("we are in the app.js")
    }
    render(){
    return(
        <View style={{flex:1}}>
            <View style={{ flex: 1, justifyContent: 'center',alignItems:'center' }}>
                <Text style={{fontSize:100}}>{this.props.navigation.state.params.questions.length} <MaterialCommunityIcons name='cards-outline' size={100}/></Text>
                <TouchableOpacity style={{ backgroundColor: '#5a667a',justifyContent: 'center', alignItems: 'center', height: 100,width:300,marginBottom:10 }}>
                    <Text style={{ fontSize: 20, color: '#f2f2f2'}}>Start Quize</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#5a667a', justifyContent: 'center', alignItems: 'center', height: 100,width:300,marginBottom:10}}>
                    <Text style={{ fontSize: 20, color: '#f2f2f2'}}>Add New card</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

}
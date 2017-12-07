import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import styles from '../styles/quizeResultStyle'
const QuizeResult=({correct,wrong,onRestartTheQuize,onBackToDeck})=>{
return (
  <View style={styles.container}>
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.resultText}>{`❤️ ${correct}`}</Text>
      <Text style={styles.resultText}>{`💔 ${wrong}`}</Text>
    </View>
    <View>
      <TouchableOpacity
        onPress={() => onRestartTheQuize()}
        style={styles.btnRestart}
      >
        <Text style={styles.btnText}>Try Again</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onBackToDeck()}
        style={styles.btnBack}
      >
        <Text style={styles.btnText}>Back To The Deck</Text>
      </TouchableOpacity>
    </View>
  </View>
);
}

export default QuizeResult
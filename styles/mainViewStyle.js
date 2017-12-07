import { StyleSheet } from 'react-native'

const mainViewStyle = StyleSheet.create({
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
        borderColor: "#01252D",
        backgroundColor: "#74A1AC",
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
        color: "#457A87",
    },
    btnNewDeckIcon: {
        color: "#A6373F"
    },
    btnAddNewDeck: {
        width: 120,
        height: 120,
        alignSelf: "flex-end"
    }
});

export default mainViewStyle
import { StyleSheet } from 'react-native'

const deckStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    txtHeader: {
        fontSize: 100
    },
    btn: {
        backgroundColor: "#5a667a",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 300,
        marginBottom: 10
    },
    btnText: {
        fontSize: 20,
        color: "#f2f2f2"
    }
});

export default deckStyle
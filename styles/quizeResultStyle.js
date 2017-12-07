import { StyleSheet } from 'react-native'

const quizeResultStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    resultText: {
        fontSize: 50,
        marginRight: 50
    },
    btnRestart: {
        marginTop: 40,
        marginBottom: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9cdba4",
        width: 300,
        height: 80
    },
    btnBack: {
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00ccff",
        height: 80
    },
    btnText: {
        fontSize: 20
    }
});

export default quizeResultStyle
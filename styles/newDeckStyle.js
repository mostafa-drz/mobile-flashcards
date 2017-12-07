import { StyleSheet } from 'react-native'

const newDeckStyle = StyleSheet.create({
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
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: 300,
        backgroundColor: "#87ceeb",
        borderRadius: 5
    },
    btnText: {
        fontSize: 30
    }
});

export default newDeckStyle
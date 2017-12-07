import { StyleSheet } from 'react-native'

const questionCardStyle = StyleSheet.create({
    container: {
        backfaceVisibility: "hidden",
        alignItems: "center",
        flex: 1
    },
    cardContainer: {
        marginTop: 100,
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    card: {
        flex: 1,
        width: 400,
        backfaceVisibility: "hidden",
        alignSelf: "center",
        padding: 10,
        height: 200,
        borderRadius: 4
    },
    questionCard: {
        backgroundColor: "#00bfff"
    },
    questionText: {
        fontSize: 20
    },
    answerCard: {
        backgroundColor: "#95e495",
        position: "absolute",
        top: 0
    },
    answerText: {
        fontSize: 20
    },
    btnShowHideText: {
        fontSize: 20,
        textAlign: "center",
        backgroundColor: "#274374",
        color: "#f4f7f7",
        width: 200,
        height: 50,
        paddingVertical: 10,
        marginTop: 30
    },
    actionsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10,
        flex: 1
    },
    btnCorrect: {
        backgroundColor: "#118a29",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        marginRight: 10,
        maxHeight: 80
    },
    btnCorrectText: {
        color: "#f4f7f7",
        fontSize: 20
    },
    btnIncorrect: {
        backgroundColor: "#f0082d",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        maxHeight: 80
    },
    btnIncorrectText: {
        color: "#f4f7f7",
        fontSize: 20
    }
});

export default questionCardStyle
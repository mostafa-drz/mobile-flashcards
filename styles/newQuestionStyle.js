import { StyleSheet } from 'react-native'

const newQuestionStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100
    },
    inputContainer: {
        paddingTop: 100,
        justifyContent: 'center'
    },
    txtInput: {
        height: 200,
        width: 400,
        fontSize: 20,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        textAlignVertical: "top",
        padding: 10
    },
    btnContainer: {
        marginBottom: 200
    },
    btnAdd: {
        width: 200,
        backgroundColor: "#b6d6bf",
        marginBottom: 100,
        padding: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    btnAddText: {
        fontSize: 30
    }
});

export default newQuestionStyle
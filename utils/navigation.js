import { StackNavigator } from "react-navigation";
import Deck from "../components/Deck";
import MainView from "../components/MainView";
import NewQuestion from "../components/NewQuestion";
import NewDeck from "../components/NewDeck";
import Quize from "../components/Quize";
const Stack = StackNavigator({
    MainView: {
        screen: MainView,
        navigationOptions: {
            title: "Flashy Cards"
        }
    },
    Deck: {
        screen: Deck,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.title
        })
    },
    NewQuestion: {
        screen: NewQuestion,
        navigationOptions: {
            title: "Add New Question"
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            title: "Add New Deck"
        }
    },
    Quize: {
        screen: Quize,
        navigationOptions: ({ navigation }) => ({
            title: `Quize for ${navigation.state.params.title}`
        })
    }
});

export default Stack
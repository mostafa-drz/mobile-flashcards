import { GET_ALL_DECKS, ADD_NEW_DECK, ADD_DECKS } from './types'
import { getAllDecksFromStorage, addADeckToStorage, addDecksToStorage } from '../utils/helpers'


// export function getAllDecks({ decks }) {
//     return {
//         type: GET_ALL_DECKS,
//         decks
//     }
// }

export function addNewDeck({ name }) {
    return {
        type: ADD_NEW_DECK,
        name
    }
}

export function addDecks({ decks }) {
    return {
        type: ADD_DECKS,
        decks
    }
}

// export function fetchAllDecks() {
//     return function(dispatch) {
//         return getAllDecksFromStorage().then((decks) => {
//             console.log("from actions")
//             console.log(decks)
//             dispatch(getAllDecks({ decks }))
//         })
//     }
// }

export function addDecksAsync({ decks }) {
    return function(dispatch) {
        return addDecksToStorage(decks).then(() => {
            dispatch(addDecks({ decks }))
        }).catch((error) => {
            console.log('something went wrong')
            console.log(error)
        })
    }
}

export function addNewDeckAsync({ name }) {
    return function(dispatch) {
        return addADeckToStorage(name).then(() => {
            dispatch(addNewDeck({ name }))
        })
    }
}
import { GET_ALL_DECKS, ADD_NEW_DECK, ADD_DECKS } from './types'
import { getAllDecksFromStorage, addADeckToStorage, addDecksToStorage } from '../utils/helpers'
import { ADD_NEW_QUESTION } from "./types";
import { addQuestionToStorage } from "../utils/helpers";

export function addNewQuestion({ deckName, question }) {
    return {
        type: ADD_NEW_QUESTION,
        question,
        deckName
    };
}

export function addNewQuestionAsync({ deckName, question }) {
    return function(dispatch) {
        return addQuestionToStorage(deckName, question).then(() => {
            dispatch(addNewQuestion({ deckName, question }));
        });
    };
}


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
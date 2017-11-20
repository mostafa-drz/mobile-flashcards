import { ADD_NEW_QUESTION } from './types'
import { addQuestionToStorage } from "../utils/helpers";
export function addNewQuestion({ deckName, question }) {
    return {
        type: ADD_NEW_QUESTION,
        question,
        deckName
    }
}

export function addNewQuestionAsync({ deckName, question }) {
    return function(dispatch) {
        return addQuestionToStorage(deckName, question).then(() => {
            addNewQuestion({ deckName, question })
        })
    }
}
import { AsyncStorage } from "react-native"

const STORAGE_KEYWORD = 'UdaciFlash'

export function getAllDecksFromStorage() {

    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(STORAGE_KEYWORD)
            .then(data => {
                resolve(JSON.parse(data))
            })
            .catch(error => {
                reject('failed')
            });
    })
}

export function addADeckToStorage(name) {
    return new Promise((resolve, reject) => {
        let data = getAllDecks();
        data[name] = { questions: [], title: name };
        AsyncStorage.setItem(STORAGE_KEYWORD, JSON.stringify(data))
            .then(() => {
                resolve('success')
            })
            .catch(
                error => {
                    reject('failed')
                }
            );
    })
}

export function addQuestionToStorage(deckName, question, answer) {
    console.log('from add question')
    console.log(deckName)
    console.log(question)
    console.log(answer)
    return new Promise((resolve, reject) => {
        getAllDecks().then((data) => {
            data = data[deckName].questions.concat({
                question,
                answer
            });
            AsyncStorage.setItem(STORAGE_KEYWORD, JSON.stringify(data))
                .then(() => {
                    resolve("success");
                    console.log(data)
                })
                .catch(error => {
                    reject("failed");
                });
        })

    })
}


export function addDecksToStorage(decks) {
    console.log("Call from addDecksToStorage")
    console.log(decks)
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(STORAGE_KEYWORD, JSON.stringify(decks)).catch(
            error => {
                console.error("Something went wrong");
                console.error(error);
            }
        );
    })
}
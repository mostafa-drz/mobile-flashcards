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
        getAllDecksFromStorage().then((data) => {
            data[name] = { questions: [], title: name };
            AsyncStorage.setItem(STORAGE_KEYWORD, JSON.stringify(data))
                .then(() => {
                    resolve("success");
                })
                .catch(error => {
                    reject("failed");
                });
        })

    })
}

export function addQuestionToStorage(deckName, question) {
    return new Promise((resolve, reject) => {
        getAllDecksFromStorage().then((data) => {
            data = {
                ...data,
                [deckName]: {
                    ...[deckName],
                    questions: data[deckName].questions.concat(question)
                }
            }
            AsyncStorage.setItem(STORAGE_KEYWORD, JSON.stringify(data))
                .then(() => {
                    resolve()
                })
                .catch(error => {
                    reject("failed");
                });
        })

    })
}


export function addDecksToStorage(decks) {
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(STORAGE_KEYWORD, JSON.stringify(decks)).then(() => {
                resolve(decks)
            })
            .catch(
                error => {
                    console.error("Something went wrong");
                    console.error(error);
                }
            );
    })
}
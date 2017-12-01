import { AsyncStorage } from "react-native"
import { Permissions, Notifications } from 'expo'
const STORAGE_KEYWORD = 'UdaciFlash'
const NOTIFICATION_KEY = 'UdaciFlash:Notification'

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

export function setLocalNotification() {
    return AsyncStorage.getItem(NOTIFICATION_KEY)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(), {
                                    time: tomorrow,
                                    repeat: 'minute'
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}

function createNotification() {
    return {
        title: 'Quiz!',
        body: `📖 Don't forget to the quiz!`,
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: 'true'
        }
    }
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(() => {
        Notifications.cancelAllScheduledNotificationsAsync();
    });
}
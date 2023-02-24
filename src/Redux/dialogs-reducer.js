import dataUserReducer from "./dataUser-reducer";

const ADD_MASSAGE = "ADD_MASSAGE";

let initialState = {
    dataUsersDialogs: [{
        id: 0,
        companionName: "Yulia Kharisova",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }, {
        id: 1,
        companionName: "Dilovar Salokhov",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }, {
        id: 2,
        companionName: "Tatiana Starchikova",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }, {
        id: 3,
        companionName: "Nadezhda Zmeykina",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }, {
        id: 4,
        companionName: "Damir Shulanov",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }, {
        id: 5,
        companionName: "Tatyana Popova",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }, {
        id: 6,
        companionName: "Dmitry Ilyin",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }
    ],

    usersMassages: [{
        id: 0,
        massages: [
            {
                massage: "Hello",
                userName: "Yulia Kharisova",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "Hi!",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "How are you?",
                userName: "Yulia Kharisova",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "Fine. Thanks",
                userName: "Yulia Kharisova",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            }
        ],
    }, {
        id: 1,
        massages: [
            {
                massage: "Hello",
                userName: "Dilovar Salokhov",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "Hello",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "How are you?",
                userName: "Dilovar Salokhov",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "Fine. Thanks",
                userName: "Dilovar Salokhov",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            }
        ],
    }, {
        id: 2,
        massages: [
            {
                massage: "Hello",
                userName: "Tatiana Starchikova",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "Hello",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "How are you?",
                userName: "Tatiana Starchikova",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "Fine. Thanks",
                userName: "Tatiana Starchikova",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            }
        ],
    }, {
        id: 3,
        massages: [
            {
                massage: "Hello",
                userName: "Nadezhda Zmeykina",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "Hello",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "How are you?",
                userName: "Nadezhda Zmeykina",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "Fine. Thanks",
                userName: "Nadezhda Zmeykina",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            }
        ],
    }, {
        id: 4,
        massages: [
            {
                massage: "Hello",
                userName: "Damir Shulanov",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "Hello",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "How are you?",
                userName: "Damir Shulanov",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "Fine. Thanks",
                userName: "Damir Shulanov",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            }
        ],
    }, {
        id: 5,
        massages: [
            {
                massage: "Hello",
                userName: "Tatyana Popova",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "Hello",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "How are you?",
                userName: "Tatyana Popova",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "Fine. Thanks",
                userName: "Tatyana Popova",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            }
        ],
    }, {
        id: 6,
        massages: [
            {
                massage: "Hello",
                userName: "Dmitry Ilyin",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "Hello",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "How are you?",
                userName: "Dmitry Ilyin",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"
            },
            {
                massage: "Fine. Thanks",
                userName: "Dmitry Ilyin",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            }
        ],
    },
    ]
};

let dataUserCopy = {...dataUserReducer()};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MASSAGE: {
            let stateCopy = {...state};
            stateCopy.usersMassages = [...state.usersMassages]
            let newMassage = {
                massage: action.NewMassageText,
                userName: dataUserCopy.name,
                avatar: dataUserCopy.avatar
            }
            stateCopy.usersMassages[action.userId].massages.push(newMassage);
            return stateCopy;
            // if (/\S+/.test(newMassage.massage)) {
            //     stateCopy.usersMassages[action.userId].massages.push(newMassage);
            //     stateCopy.NewMassageText = "";
            //     return stateCopy;
            // } else {
            //     return {
            //         ...state,
            //         NewMassageText: ""
            //     }
            // }
        }
        default:
            return state;
    }

}

export const addMassageActionCreator = (id, NewMassageText) => ({type: ADD_MASSAGE, userId: id, NewMassageText})

export default dialogsReducer;
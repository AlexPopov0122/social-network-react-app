import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {InitialStateType, UserMassageType} from "../RedusersTypes/dialogsReduserTypes";

let initialState: InitialStateType = {
    dataUsersDialogs: [{
        id: 0,
        companionName: "Dilovar Salokhov",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }, {
        id: 1,
        companionName: "Tatiana Starchikova",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }, {
        id: 2,
        companionName: "Nadezhda Zmeykina",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }, {
        id: 3,
        companionName: "Damir Shulanov",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }, {
        id: 4,
        companionName: "Tatyana Popova",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }, {
        id: 5,
        companionName: "Dmitry Ilyin",
        avatarCompanion: "https://i.imgur.com/vNMhAT4.jpg"
    }
    ],

    usersMassages: [{
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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

const dialogsReducer: Slice<InitialStateType> = createSlice({
    name: "dialogsReducer",
    initialState,
    reducers: {
        addMassageActionCreator: (state, action: PayloadAction<any>): void => {
            let newMassage: UserMassageType = {
                massage: action.payload.NewMassageText,
                userName: action.payload.userName,
                avatar: action.payload.avatar.large
            }
            state.usersMassages[action.payload.userId].massages.push(newMassage)
        },
    }
})
const {actions, reducer} = dialogsReducer;
export const {
    addMassageActionCreator
} = actions;

export default reducer;
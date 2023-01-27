import dataUserReducer from "./dataUser-reducer";

const ADD_MASSAGE = "ADD_MASSAGE";
const CHANGE_MASSAGE = "CHANGE_MASSAGE";

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
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
            },
            {
                massage: "How are you?",
                userName: "Yulia Kharisova",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
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
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
            },
            {
                massage: "How are you?",
                userName: "Dilovar Salokhov",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
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
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
            },
            {
                massage: "How are you?",
                userName: "Tatiana Starchikova",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
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
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
            },
            {
                massage: "How are you?",
                userName: "Nadezhda Zmeykina",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
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
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
            },
            {
                massage: "How are you?",
                userName: "Damir Shulanov",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
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
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
            },
            {
                massage: "How are you?",
                userName: "Tatyana Popova",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
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
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
            },
            {
                massage: "How are you?",
                userName: "Dmitry Ilyin",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            },
            {
                massage: "I'm fine. Thanks. And you?",
                userName: "Alexander Popov",
                avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"
            },
            {
                massage: "Fine. Thanks",
                userName: "Dmitry Ilyin",
                avatar: "https://i.imgur.com/vNMhAT4.jpg"
            }
        ],
    },
    ],
    NewMassageText: ""
};

let dataUser = dataUserReducer();

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MASSAGE:
            let newMassage = {
                massage: state.NewMassageText,
                userName: dataUser.name,
                avatar: dataUser.avatar
            }
            if (/\S+/.test(newMassage.massage)) {
                state.usersMassages[action.userId].massages.push(newMassage);
                state.NewMassageText = "";
            } else {
                state.NewMassageText = "";
            }
            break;

        case CHANGE_MASSAGE:
            state.NewMassageText = action.NewMassageText;
            break;
    }
    return state;
}

export const changeMassageActionCreator = (text) =>
    ({type: CHANGE_MASSAGE, NewMassageText: text})
export const addMassageActionCreator = (id) => ({type: ADD_MASSAGE, userId: id})

export default dialogsReducer;
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
    _state: {
        dataUser: {
            name: "Alexander Popov",
            avatar: "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg",
            email: "alexpopov.01.22@gmail.com"
        },
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non,\n" +
                        "feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
                    files: ["http://uitheme.net/sociala/images/t-10.jpg",
                        "http://uitheme.net/sociala/images/t-11.jpg",
                        "http://uitheme.net/sociala/images/t-12.jpg"],
                    likes: "2.8K",
                    comments: "122",
                    timePost: "3 hour ago"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non,\n" +
                        "feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus" +
                        "feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
                    files: ["http://uitheme.net/sociala/images/t-10.jpg",
                        "http://uitheme.net/sociala/images/t-11.jpg",
                        "http://uitheme.net/sociala/images/t-12.jpg"],
                    likes: "2K",
                    comments: "10",
                    timePost: "30 days ago"
                },
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non,\n" +
                        "feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus",
                    files: ["http://uitheme.net/sociala/images/t-10.jpg",
                        "http://uitheme.net/sociala/images/t-11.jpg",
                        "https://i.ytimg.com/vi/eBlpJVELZ_k/maxresdefault.jpg"],
                    likes: "968",
                    comments: "224",
                    timePost: "1 year ago"
                }
            ],
            NewPostText: ""
        }
    },
    getState() {
        return this._state;
    },
    _renderPage() {
    },
    subscribe(observer) {
        this._renderPage = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.dataUser, this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dataUser, this._state.dialogsPage, action);

        this._renderPage()
    }
}

window.state = store._state;

export default store;
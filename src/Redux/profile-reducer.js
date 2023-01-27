const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                text: state.NewPostText,
                files: [],
                likes: 0,
                comments: 0,
                timePost: "Moment ago"
            }
            if (/\S+/.test(newPost.text)) {
                state.posts.push(newPost);
                state.NewPostText = "";
            } else {
                state.NewPostText = ""
            }
            break;
        case UPDATE_NEW_POST_TEXT:
            state.NewPostText = action.NewPostText;
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, NewPostText: text})

export default profileReducer;
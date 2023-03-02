import profileReducer, {addPostActionCreator, changeUserId} from "./profile-reducer";

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
                "https://avatars.yandex.net/get-music-user-playlist/38125/637255038.1036.49762/m1000x1000?1586165315944&webp=false"],
            likes: "968",
            comments: "224",
            timePost: "1 year ago"
        }
    ],
    userData: null,
    userId: null,
    isFetching: true,
    userStatus: ""
};

describe("Profile reducer test", () => {
    test('check new post text', () => {
        let action = addPostActionCreator("new post text");
        let newState = profileReducer(initialState, action);

        expect(newState.posts[0].text).toBe("new post text")
    });

    test('change userId', () => {
        let action = changeUserId(2);
        let newState = profileReducer(initialState, action);

        expect(newState.userId).toBe(2)
    });
})

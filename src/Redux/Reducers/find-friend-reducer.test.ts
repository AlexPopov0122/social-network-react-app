import {InitialStateType} from "../RedusersTypes/findFriendsReducerTypes";
import reducer, {setFollowStatus} from "./find-friend-reducer";

// Как я понял beforeEach() больше не нужен и все что происходит внутри теста потом зачищается,
// либо тест не изменяет внешние переменные, а берет их копии

let initialState: InitialStateType = {
        users: [
            {id: 0, name: "Alex 0", followed: false,
                photos: {small: null, large: null}, status: "status 0", },
            {id: 1, name: "Alex 1", followed: false,
                photos: {small: null, large: null}, status: "status 1"},
            {id: 2, name: "Alex 2", followed: true,
                photos: {small: null, large: null}, status: "status 2"},
            {id: 3, name: "Alex 3", followed: true,
                photos: {small: null, large: null}, status: "status 3"},
        ],
        count: 10,
        currentPage: 1,
        totalCountPages: 0,
        isFetching: true,
        disabledFollowButton: [],
        filter: {
            term: "",
            friend: null
        }
    }

test("follow success", () => {

    const newState = reducer(initialState, setFollowStatus({userId: 1, followed: true}))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()

})
test("unfollow success", () => {

    const newState = reducer(initialState, setFollowStatus({userId: 3, followed: false}))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()

})


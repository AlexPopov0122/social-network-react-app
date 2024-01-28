import {follow, setFollowStatus, toggleFollowDisabledStatus, unfollow} from "./find-friend-reducer";
import {ApiT, ResultCode} from "../../api/api";
import {followAPI} from "../../api/followAPI";

// На каждый вызов апишки будет возвращаться фейковая функция
jest.mock("../../api/followAPI")
const userAPIMock = followAPI as jest.Mocked<typeof followAPI>;

// Задаем фейковое значение для метода follow
const result: ApiT = {
    resultCode: ResultCode.Success,
    messages: [],
    data: {}
}

// Создаем фейковую функция диспатча
const dispatchMock = jest.fn();

test("dispatches of follow thunk", async () => {

    // Присваеваем фейковое значение при вызове метода follow
    userAPIMock.follow.mockReturnValue(Promise.resolve(result))

    const thunkFollow = follow(1)

    // Вызываем санку с фейковой апишкой и диспатчем
    await thunkFollow(dispatchMock)

    // Проверяем сколько раз вызывался диспатч
    expect(dispatchMock).toBeCalledTimes(3)

    // Проверяем какие что передавалос внутри диспатчей
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowDisabledStatus({userId: 1, isFetching: true}))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, setFollowStatus({userId: 1, followed: true}))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowDisabledStatus({userId: 1, isFetching: false}))
})

test("dispatches of unfollow thunk", async () => {

    // Присваеваем фейковое значение при вызове метода follow
    userAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

    const thunkUnfollow = unfollow(1)

    // Вызываем санку с фейковой апишкой и диспатчем
    await thunkUnfollow(dispatchMock)

    // Проверяем сколько раз вызывался диспатч
    expect(dispatchMock).toBeCalledTimes(3)

    // Проверяем какие что передавалос внутри диспатчей
    expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowDisabledStatus({userId: 1, isFetching: true}))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, setFollowStatus({userId: 1, followed: false}))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowDisabledStatus({userId: 1, isFetching: false}))
})


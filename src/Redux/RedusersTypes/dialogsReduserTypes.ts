import {TActionsAuth} from "../Reducers/auth-reducer";

type DataUsersType = Array<DataUserType>
type DataUserType = {
    id: number | null
    companionName: string | null
    avatarCompanion: string | null
}

type UsersMassagesType = Array<UserMassagesType>
type UserMassagesType = {
    id: number | null
    massages: Array<UserMassageType>
}
export type UserMassageType = {
    massage: string
    userName: string
    avatar: string
}


export type InitialStateType = {
    dataUsersDialogs: DataUsersType
    usersMassages: UsersMassagesType
}
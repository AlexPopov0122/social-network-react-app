
export type DataUsersType = Array<DataUserType>
export type DataUserType = {
    id: number | null
    companionName: string | null
    avatarCompanion: string | undefined
}

export type UsersMassagesType = Array<UserMassagesType>
export type UserMassagesType = {
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
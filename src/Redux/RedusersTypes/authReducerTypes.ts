type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type PhotosType = {
    small: string | undefined
    large: string | undefined
}


export type UserDataType = {
    aboutMe: string | null
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos: PhotosType
}

export type InitialStateType = {
    login: string | null,
    id: number | null,
    email: string | null,
    userData: UserDataType | null,
    isUserAuth: boolean,
    isInitial: boolean,
    captchaUrl: string | null
};
export type InitialStateType = {
    users: Array<UsersType>,
    count: number,
    currentPage: number,
    totalCountPages: number,
    isFetching: boolean,
    disabledFollowButton: Array<number>
    filter: FilterType
};

export type FilterType = {
    term: string
    friend: null | boolean
}

export type UsersType = {
    name: string
    id: number
    // uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}

type PhotosType = {
    small: string | null
    large: string | null
}
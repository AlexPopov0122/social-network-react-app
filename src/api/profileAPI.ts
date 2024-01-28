import {PhotosType, UserDataType} from "../Redux/RedusersTypes/authReducerTypes";
import {ApiT, instance} from "./api";
import {DataSubmitProfileBF} from "../components/Profile/Advertising/ProfileBlockForm";

type PhotosApiT = {
    photos: PhotosType
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<UserDataType>(`profile/${userId}`).then(res => res.data)
    },

    getUserStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },

    setUserStatus(status: string) {
        return instance.put<ApiT>(`profile/status`, {status})
    },

    setUserData(userData: DataSubmitProfileBF) {
        return instance.put<ApiT>(`profile`, {...userData})
    },

    updateAvatar(photo: string) {
        let formData = new FormData();
        formData.append("image", photo);
        return instance.put<ApiT<PhotosApiT>>(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => res.data)
    }
}
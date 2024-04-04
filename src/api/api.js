import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fd0e6be9-4dcd-462b-8974-316cd93b8872"
    }
})

export const usersApi = {
    getUser(currentPage) {
        return instance.get(`users?page=${currentPage}`)
            .then(response => response.data)
    },
    usersUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    userFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileApi = {
    getProfileUser(infoUrl) {
        return instance.get(`profile/${infoUrl}`)
            .then(response => response.data)
    },
    getStatusProfile(userId) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatusProfile(status) {
        return instance.put(`/profile/status`, {status})
            .then(response => response.data)
    }
}

export const authAPI = {
    // authorization () {
    //     return instance.get('auth/me')
    //         .then(response => response.data)
    // },
    authorization: () => {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login (email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
            .then(response => response.data)
    },
    logout () {
        return instance.delete('auth/login')
            .then(response => response.data)
    }
}

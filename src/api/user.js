

import ajax from '../utils/ajax'

export const reqRegister = function (data) {
    return ajax({
        url: "/register",
        method: 'post',
        data
    })
}

export const reqLogin = function (data) {
    return ajax({
        url: "/login",
        method: 'post',
        data
    })
}
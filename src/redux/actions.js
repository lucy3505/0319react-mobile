/* 包含n个action creator
异步action
同步action

*/
import { reqRegister, reqLogin } from './../api/user'
import { AUTH_SUCCESS, ERROR_MSG } from './action-types'

//每个actionType豆对应一个同步action
const authSuccess = (user) => ({ type: 'AUTH_SUCCESS', data: user })
const errorMsg = (msg) => ({ type: "ERROR_MSG", data: msg })

//注册一步action
export const register = ({ username, password, type }) => {
    return async dispatch => {
        const res = await reqRegister({ username, password, type })
        if (res.code === 0) {
            dispatch(authSuccess(res.data))
        } else {
            dispatch(errorMsg(res.msg))
        }
    }
}
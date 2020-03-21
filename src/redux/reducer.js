/* 包含n个reducer函数，根据老的state和指定的action返回一个新的state */

// 执行combineReducers这个函数返回一个reducer，下面函数的状态
import { combineReducers } from 'redux'
import { AUTH_SUCCESS, ERROR_MSG } from './action-types'

const initState = {
  username: '',
  type: '',
  msg: '' //错误提示信息
}
function user(state = initState, action) {
  const { type } = action
  switch (type) {
    case AUTH_SUCCESS:
      return { ...state, ...action.data }
    case ERROR_MSG:
      return { ...state, msg: action.data }
    default:
      return state
  }

}



export default combineReducers({
  user,
})
//向外暴露的状态的结构：{user:{}}


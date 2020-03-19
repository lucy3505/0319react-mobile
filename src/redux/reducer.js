/* 包含n个reducer函数，根据老的state和指定的action返回一个新的state */

// 执行combineReducers这个函数返回一个reducer，下面函数的状态
import { combineReducers } from 'redux'
function xxx(state = 0, action) {
  return state
}

function yyy(state = 0, action) {
  return state
}

export default combineReducers({
  xxx,
  yyy
})
//向外暴露的状态的结构：{xxx:0,yyy:0}


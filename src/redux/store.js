/* redux最核心的管理对象模块 */

//向外暴露store对象,谁来产生这个store对象
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducer'
//引入异步
import thunk from 'redux-thunk'

export default createStore(reducers, applyMiddleware(thunk))
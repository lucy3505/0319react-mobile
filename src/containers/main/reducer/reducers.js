import { combineReducers } from "redux";
import { INCREMENT,DECREMENT,ADD_MSG } from "./action-type";


const count = function(state=0,action){
    switch (action.type) {
        case INCREMENT:
            return state + action.data 
        case DECREMENT:
            return state - action.data 
        default: return state

    }
}

const initMsgs=[]
const msgs = function(state = initMsgs,action){
    switch (action.type){
        case ADD_MSG:return [action.data,...state]
        default:return state
    }
}

export default combineReducers({count,msgs})

// export default count
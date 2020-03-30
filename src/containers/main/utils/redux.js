export const createStore=function(reducer){
    // 调用reducer得初始状态并保存
    let state
    let listerners = []
     state= reducer(state,{type:"@mini"})

    const dispatch=function(action){
        state=reducer(state,action)
    
        listerners.forEach(listerner => {
            listerner()
        });
    }
    const getState=function(){
        return state
    }
    const subscribe=function(listerner){
        listerners.push(listerner)
    }


    return{dispatch,getState,subscribe}
}

export const combineReducers=function(obj){
    return function(){
        
    }
}

// const redux = {
//      createStore:createStore
// }

// export default redux
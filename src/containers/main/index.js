import React, { Component } from 'react'
import { Button, List } from 'antd-mobile';
import * as actions from "./reducer/actions";


export default class index extends Component {
  state = {
    count: 0,
    msgs: []
  }

  increment = () => {
    // 1. 得到选择增加数量
    const number = this.select.value * 1
    // 2. 得到原本的count状态
    // const count = this.state.count
    // 3. 更新状态
    // this.setState({count: count + number})
    this.props.store.dispatch(actions.increment(number))

  }

  decrement = () => {
    // 1. 得到选择增加数量
    const number = this.select.value * 1
    // 2. 得到原本的count状态
    // const count = this.state.count
    // 3. 更新状态
    // this.setState({count: count - number})
    this.props.store.dispatch(actions.decrement(number))
  }

  incrementIfOdd = () => {
    // 1. 得到选择增加数量
    const number = this.select.value * 1
    // 2. 得到原本的count状态
    // const count = this.state.count
    const count = this.props.store.getState().count
    //判断, 满足条件才更新状态
    if (count % 2 === 1) {
      // 3. 更新状态
      // this.setState({count: count + number})
      this.props.store.dispatch(actions.increment(number))
    }
  }

  incrementAsync = () => {
    // 1. 得到选择增加数量
    const number = this.select.value * 1
    // 2. 得到原本的count状态
    // const count = this.state.count
    const count = this.props.store.getState().count

    // 启动延时定时器
    setTimeout(() => {
      // 3. 更新状态
      // this.setState({count: count + number})
       this.props.store.dispatch(actions.increment(number))
    }, 1000)
  }

//   addMsg = () => {
//     // const msgs = this.state.msgs
//     // const msgs = this.props.store.getState().msgs
// // 
//     const msg = this.input.value
//     // msgs.unshift(msg)
//     // this.setState({msgs})

//        this.props.store.dispatch(actions.addMsg(msg))

//   }

  render() {
    // const {count} = this.state
    const {count,msgs} = this.props.store.getState()
    // const count = this.props.store.getState()
    
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={select => this.select = select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>
          &nbsp;
          <button onClick={this.decrement}>-</button>
          &nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>
          &nbsp;
          <button onClick={this.incrementAsync}>increment async</button>
          &nbsp;
        </div>

        <hr/>

        <div>
          {/* <input type="text" ref={input => this.input = input}/>
          <button onClick={this.addMsg}>添加消息</button>
          <ul>
            {
              msgs.map((msg, index) => <li key={index}>{msg}</li>)
            }
          </ul> */}
        </div>

      </div>
    )
  }
}

import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './containers/login'
import Main from './containers/main'
import Register from './containers/register'
import {Provider} from 'react-redux'
import store from './redux/store'

export default class App extends Component {

  render() {
    return (
      <Provider store = {store}>
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/" component={Main}></Route>{/* 默认组件，前面没有一个匹配就会找Main组件 */}
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}
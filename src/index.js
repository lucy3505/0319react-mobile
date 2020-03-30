import React from 'react';
import ReactDOM from 'react-dom';
import App from './../src/containers/main';
import store from './../src/containers/main/reducer/store'

// ReactDOM.render(<App />, document.getElementById('root'));

function render(){
   ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

render()
store.subscribe(render)

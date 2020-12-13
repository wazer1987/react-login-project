import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import logger from 'redux-logger'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

import{createStore,applyMiddleware} from 'redux'

import rootRducer from './reducers'

import {Provider} from 'react-redux'
import{ serCurrentuser} from './actions/login'
import jwtDecode from 'jwt-decode'


//引入路由模式文件
import{BrowserRouter as Router} from 'react-router-dom'
//引入router文件
import routes from './routes'
//引入菜单
import NavigationBar from './components/NavigationBar'
//引入消息提示列表
import FlashMessagesList from './components/flash/FlashMessagesList'
const store = createStore(rootRducer,composeWithDevTools(applyMiddleware(logger,thunk)))
if(localStorage.getItem('jwtToken')){
  store.dispatch(serCurrentuser(jwtDecode(localStorage.getItem('jwtToken'))))
}
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}>
      <NavigationBar/>
      <FlashMessagesList />
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

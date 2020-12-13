import React from 'react'
import {Route} from 'react-router-dom'
import App from './components/App'
import SignupPage from './components/signup/SignupPage'
import LoginPage from './components/login/LoginPage'
import ShopPage from './components/shop/ShopPage'
import requireAuth from './utils/requireAuth'
export default (
    <div>
        <Route path="/" exact component={App}></Route>   
        <Route path="/signup" exact component={SignupPage}></Route> 
        <Route path="/login" exact component={LoginPage}></Route>  
        <Route path="/shop" exact component={requireAuth(ShopPage)}></Route>  
    </div>
)

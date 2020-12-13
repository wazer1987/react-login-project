import React from 'react'
import LoginForm from './LoginForm'
import {connect} from 'react-redux'
import {login}from '../../actions/login'
class LoginPage extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <LoginForm login={this.props.login}/>
                </div>
                <div className="col-sm-3"></div>
            </div>
        )
    }
}
export default connect(null,{login})(LoginPage)
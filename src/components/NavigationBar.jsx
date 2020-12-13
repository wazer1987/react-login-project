import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../actions/login'
class Navigator extends React.Component {
    logout(e){
        e.preventDefault()
        this.props.logout()
    }
    render() {
        console.log(this.props.auth,'=---')
        const isAuth = this.props.auth.isAuth
        const userLink = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" onClick={this.logout.bind(this)}>退出</a>
                </li>
            </ul>
        )
        const guestLinks = (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">注册</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">登录</Link>
                </li>
            </ul>
        )
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Login功能</Link>
                    <button className='navbar-toggler' type="button" data-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample05">
                        {isAuth?userLink:guestLinks}
                    </div>
                </div>
            </nav>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps,{logout})(Navigator)
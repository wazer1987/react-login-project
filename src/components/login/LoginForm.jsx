import React from 'react'
import classnames from 'classnames'
import validateInput from '../../utils/validators/login'
import{withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import jwtDecode from 'jwt-decode'
import {serCurrentuser} from '../../actions/login'
class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: '',
            //注册错误的时候 接收后台返回来的错误
            errors: {},
            //控制注册按钮置灰状态 防止多重点击
            isLoading: false,
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    validate = () => {
        const { errors, isvalid } = validateInput(this.state)
        if (!isvalid) {
            this.setState({
                errors
            })
        }
        return isvalid
    }
    onSubmit = async (e) => {
        e.preventDefault()
        this.setState({
            isLoading: true
        })
        if (this.validate()) {
            const { data } = await this.props.login(this.state)
            console.log(data)
            if (data.token) {
                this.setState({
                    isLoading: false
                })
                localStorage.setItem('jwtToken',data.token)
                this.props.serCurrentuser(jwtDecode(data.token))
                this.props.history.push('/')
            } else {
                this.setState({
                    isLoading: false,
                    errors: {errors:data.errors}
                })
            }
        }
    }
    render() {
        const { errors } = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                {errors.errors && <div className="alert alert-danger">{errors.errors}</div>}
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        className={classnames('form-control', { 'is-invalid': errors.username })}
                    />
                    {errors.username && <span className="form-text text-muted">{errors.username}</span>}
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        className={classnames('form-control', { 'is-invalid': errors.password })}
                    />
                    {errors.password && <span className="form-text text-muted">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>Login</button>
                </div>
            </form>
        )
    }
}

export default withRouter(connect(null,{serCurrentuser})(LoginForm))
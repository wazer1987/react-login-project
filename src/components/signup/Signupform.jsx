import React from 'react'
import classnames from 'classnames'
class Signupform extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:"",
            email:'',
            password:'',
            passwordConfirmation:'',
            //注册错误的时候 接收后台返回来的错误
            errors:{},
            //控制注册按钮置灰状态 防止多重点击
            isLoading:false,
        }
    }
    //每一个输入框都用同一个onchange事件
    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    checkUser = async (e) => {
        const field = e.target.name
        const val = e.target.value
        if(val !== ''){
           const {data} = await this.props.signupActions.isUserExists(val)
           let errors = this.state.errors
           let isLoading = this.state.isLoading
           if(data[0]){
                errors[field] = `用户名存在:${field}`
                isLoading = true
            }else{
                errors[field] = ''
                isLoading = false
            }
            this.setState({
                errors,
                isLoading
            })
        }
    }
    onSubmit = async (e) => {
        e.preventDefault()
        this.setState({
            isLoading:true
        })
         const {data} = await this.props.signupActions.userSignupRquest(this.state)
         if(data.code !== 200){
             this.setState({
                errors:data.errors,
                isLoading:false
             })
             this.props.flashActions.addFlshMessage({
                 type:'danger',
                 text:'注册失败,请重新注册!'
             })
            return
         }
         this.props.flashActions.addFlshMessage({
            type:'success',
            text:'注册成功!'
        })
         this.props.history.push('/')
    }
    render(){
        const {username,email,password,passwordConfirmation} = this.state.errors
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Join our community</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                     type="text" 
                     name="username" 
                     value={this.state.username}
                     onChange={this.onChange}
                     onBlur={this.checkUser}
                     className={classnames('form-control',{'is-invalid':username})}
                     />
                     {username && <span className="form-text text-muted">{username}</span>}
                    <label className="control-label">Email</label>
                    <input
                     type="text" 
                     name="email" 
                     value={this.state.email}
                     onChange={this.onChange}
                     className={classnames('form-control',{'is-invalid':email})}
                     />
                     {email && <span className="form-text text-muted">{email}</span>}
                    <label className="control-label">Password</label>
                    <input
                     type="password" 
                     name="password" 
                     value={this.state.password}
                     onChange={this.onChange}
                     className={classnames('form-control',{'is-invalid':password})}
                     />
                     {password && <span className="form-text text-muted">{password}</span>}
                    <label className="control-label">PasswordConfirmation</label>
                    <input
                     type="password" 
                     name="passwordConfirmation" 
                     value={this.state.passwordConfirmation}
                     onChange={this.onChange}
                     className={classnames('form-control',{'is-invalid':passwordConfirmation})}
                     />
                     {passwordConfirmation && <span className="form-text text-muted">{passwordConfirmation}</span>}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>注册</button>
                </div>
            </form>
        )
    }
}
export default Signupform
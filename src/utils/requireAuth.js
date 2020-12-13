import React from 'react'
import {connect} from 'react-redux'
import {addFlshMessage } from '../actions/flashMessages'
import {withRouter}from 'react-router-dom'
export default function (Compost){
    class Authenticate extends React.Component{
        componentDidMount(){
            console.log(this.props.isauth,'---')
            if(!this.props.isauth){
                this.props.addFlshMessage({
                    type:'danger',
                    text:'请先登录'
                })
                this.props.history.push('/')
            }
        }
        componentWillUpdate(nextProps){
            if(!nextProps.isauth){
                this.props.history.push('/login')
            }
        }
        render(){
            return(
                <Compost {...this.props}/>
            )
        }
    }
    const mapStateToProps = (state) => {
        return {
            isauth:state.auth.isAuth
        }
    }
    return withRouter(connect(mapStateToProps,{addFlshMessage})(Authenticate))
}
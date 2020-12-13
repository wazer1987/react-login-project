import React from 'react'
import Signupform from './Signupform'
import * as signupActions from '../../actions/signupActions'
import * as flashActions from '../../actions/flashMessages'
import {connect}from 'react-redux'
import { bindActionCreators} from 'redux'
class SignupPage extends React.Component {
    render(){
        return (
            <div className="row" >
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <Signupform history={this.props.history} signupActions={this.props.signupActions} flashActions={this.props.flashActions}/>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}
const mapDispathToProps = (dispath) => {
    return {
        signupActions:bindActionCreators(signupActions,dispath),
        flashActions:bindActionCreators(flashActions,dispath)
    }
}
export default connect(null,mapDispathToProps)(SignupPage)
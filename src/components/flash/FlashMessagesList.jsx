import React from 'react'
import FlashMessage from'./FlashMessage'
import {delFlshMessage} from '../../actions/flashMessages'
import {connect} from 'react-redux'
class FlashMessagesList extends React.Component{
    render(){
        const messages = this.props.messages.map(message => 
            <FlashMessage key={message.id} message={ message} delFlshMessage={this.props.delFlshMessage}/>
        )
        return(
            <div className="container">
                {messages}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        messages:state.flashMessages
    }
}

export default connect(mapStateToProps,{delFlshMessage})(FlashMessagesList)
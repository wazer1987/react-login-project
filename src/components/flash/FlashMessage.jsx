import React from 'react'
import classnames from 'classnames'
class FlashMessage extends React.Component{
    onClick = () => {
        console.log(this.props,'------del')
        this.props.delFlshMessage(this.props.message.id)
    }
    render(){
        const {type,text} = this.props.message
        return(
            <div className={classnames('alert',{
                'alert-success': type === 'success',
                'alert-danger': type === 'danger'
            })}>
                <button onClick={this.onClick} className="close">&times;</button>
                {text}
            </div>
        )
    }
}
export default FlashMessage
import {combineReducers} from 'redux'
import {auth} from './auth'
import {flashMessages} from './flashMessages'
const root = combineReducers({
    auth,
    flashMessages
})

export default root
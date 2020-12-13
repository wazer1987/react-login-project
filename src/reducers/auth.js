import {SET_CURRENT_USER} from '../constants/index'
import isEmpty from 'lodash/isEmpty'
import jwtDecode from 'jwt-decode'
const initalState = {
    isAuth:false,
    user:localStorage.getItem('jwtToken')?jwtDecode(localStorage.getItem('jwtToken')):{}
}
export function auth(state = initalState,action) {
    switch(action.type){
        case SET_CURRENT_USER:
        return {
            isAuth: !isEmpty(action.user),
            user:action.user
        }
        default:
        return state
    }
}
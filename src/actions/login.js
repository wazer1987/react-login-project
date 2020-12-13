import { SET_CURRENT_USER } from '../constants'
import request from '../utils/request'

export const login = (data) => {
    return (dispatch) => {
        return request({
            url:'/api/auth',
            method:'post',
            data
        })
    }
}

export const logout = () => {
    return dispath => {
        localStorage.removeItem('jwtToken')
        dispath(serCurrentuser({}))
    }
}

export const serCurrentuser = (user) => {
    return{
        type:SET_CURRENT_USER,
        user
    }
}

 
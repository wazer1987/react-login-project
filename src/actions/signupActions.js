import request from '../utils/request'
export const userSignupRquest = (userInfo) => {
    return dispath => {
      return request({
            url:'/api/users',
            method:'post',
            data:userInfo
        })
    }
}
export const isUserExists = (username) => {
    return dispath => {
      return request({
            url:`/api/users/${username}`,
            method:'get',
        })
    }
}
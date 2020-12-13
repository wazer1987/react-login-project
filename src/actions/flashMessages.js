import { ADD_FLASH_MESSAGE,DEL_FLASH_MESSAGE } from '../constants'

export const addFlshMessage = (message) => {
    return {
        type:ADD_FLASH_MESSAGE,
        message
    }
}

export const delFlshMessage = (id) => {
    return {
        type:DEL_FLASH_MESSAGE,
        id
    }
}
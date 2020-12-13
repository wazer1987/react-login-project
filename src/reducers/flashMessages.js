import { ADD_FLASH_MESSAGE,DEL_FLASH_MESSAGE} from '../constants'
let num = 1
export const flashMessages = (state = [],action = {}) => {
    switch(action.type){
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id:num++,
                    type:action.message.type,
                    text:action.message.text
                }
            ]
         case  DEL_FLASH_MESSAGE: 
         state = state.filter(item => action.id !== item.id)
         return  [...state]
            default:
            return state
    }
}
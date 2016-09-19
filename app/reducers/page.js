/**
 * Created by Superwen on 16/6/2.
 */
import { combineReducers } from 'redux'
import { RECEIVE_PAGE } from '../constants/action-types'

function page(state = {module:[]}, action) {
    switch (action.type) {
        case RECEIVE_PAGE:
            return action.page
        default:
            return state
    }
}

export default page;
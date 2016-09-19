/**
 * Created by Superwen on 16/6/2.
 */
import { combineReducers } from 'redux'
import { RECEIVE_GLOBAL } from '../constants/action-types'

function global(state = {pages:[]}, action) {
    switch (action.type) {
        case RECEIVE_GLOBAL:
            return action.global
        default:
            return state
    }
}

export default global;
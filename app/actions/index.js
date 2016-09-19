/**
 * Created by Superwen on 16/6/2.
 */
import page from '../api/api'
import * as types from '../constants/action-types'

function receivePage(page) {
    return {
        type: types.RECEIVE_PAGE,
        page: page
    }
}
function receiveGloble(global) {
    return {
        type: types.RECEIVE_GLOBAL,
        global: global
    }
}
export function getPage(pageName = 'index') {
    return dispatch => {
        page.getPage(page => {
            dispatch(receivePage(page))
        }, pageName)
    }
}
export function getGlobal() {
    return dispatch => {
        page.getPage(global => {
            dispatch(receiveGloble(global))
        }, 'global')
    }
}
//export function init() {
//    return dispatch => {
//        getPage(dispatch);
//        getGloble(dispatch);
//        console.log(1)
//    }
//}
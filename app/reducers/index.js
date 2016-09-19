import { combineReducers } from 'redux'
import page from './page'
import global from './global'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    page,
    global
})

export default rootReducer
import { combineReducers } from 'redux'
import {
    FETCHED_USERS,
    SELECTED_USER

} from './actions'
const initialState = {
    users:[],
    selectedUser:{}
}
function postsReducer(state = initialState, action) {
    switch (action.type) {
      case FETCHED_USERS:
        return {...state,users:action.users}
        case SELECTED_USER:
        return {...state,selectedUser:action.selectedUser}
      default:
        return state
    }
  }
const rootReducer = combineReducers({
    postsReducer
  })
  
  export default rootReducer
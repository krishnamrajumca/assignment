import axios from "axios"

export const FETCHED_USERS = 'FETCHED_USERS'
export const SELECTED_USER = 'SELECTED_USER'

const instance = axios.create({baseURL: 'https://reqres.in/api'});
export function fetchPosts() {
    return dispatch => {
      
      return instance.get(`/users?page=1`)
        .then(response => dispatch(receiveUsers( response.data.data)))
        
    }
}
export function updateUser(user,id){
    return dispatch => {
      
        return instance.put(`/users/${id}`,user)
          .then(response => {console.log(response);dispatch(fetchPosts())})
          
      }
}
export function selectedUser(selectedUser){
    return{
        type:SELECTED_USER,
        selectedUser
    }
}
export function receiveUsers(users) {
  return {
    type: FETCHED_USERS,
    users
  }
}


import actions from "../actions/currentUserActions";
import { API_ROOT } from '../../actioncable';


export const logIn = logInData => dispatch => {
  // logIn start
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(logInData)
  }
  return fetch(`${API_ROOT}/login`, config)
    .then(rsp => rsp.json())
    .then(data => {
      localStorage.token = data.token
      dispatch(actions.loginSuccess())
    })
    .catch(error => {
      dispatch(actions.loginFail(error))
    })
};

export const getCurrentUser = () => dispatch => {
  const config = {
    headers: {
      Authorization: localStorage.token
    }
  }
 fetch(`${API_ROOT}/profile`, config)
    .then(rsp => rsp.json())
    .then(userData => {
      dispatch(actions.gotUserInfo(userData))
    })
}

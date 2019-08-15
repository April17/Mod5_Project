import actions from "../actions/currentUserActions";
import { API_ROOT, HEADERS } from '../../actioncable';


export const logIn = logInData => dispatch => {
  const config = {
    method: 'POST',
    headers: HEADERS,
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

export const signUp = signUpData => dispatch => {
  const config = {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(signUpData)
  }
  return fetch(`${API_ROOT}/users`, config)
    .then(rsp => rsp.json())
}

export const logOut = () => dispatch => {
  localStorage.clear()
  dispatch(actions.logOut())
}

export const editAccount = (newUserInfo) => dispatch => {
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token
    },
    body: JSON.stringify(newUserInfo)
  }
  return fetch(`${API_ROOT}/users/update`, config)
    .then(rsp => rsp.json())
    .then(data => {
      if (!data.errors) {
        dispatch(actions.gotUserInfo(data))
      } else {
        console.log(data.errors);
      }
    })
}

export const deleteAccount = () => dispatch => {
  console.log("delete_accout");
  const config = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token
    }
  }
  return fetch(`${API_ROOT}/users/delete_accout`, config)
    .then(rsp => rsp.json())
  //push to Front Page
}

export const createCharacter = (newCharacterInfo) => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token
    },
    body: JSON.stringify(newCharacterInfo)
  }
  return fetch(`${API_ROOT}/characters`, config)
    .then(rsp => rsp.json())
    .then(data => {
      if (!data.errors) {
        dispatch(actions.gotUserInfo(data))
      } else {
        console.log(data.errors);
      }
    })
}

export const deleteCharacter = (characterId) => dispatch => {
  const config = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.token
    },
    body: JSON.stringify(characterId)
  }
  return fetch(`${API_ROOT}/characters/${characterId}`, config)
    .then(rsp => rsp.json())
    .then(data => {
      if (!data.errors) {
        dispatch(actions.gotUserInfo(data))
      } else {
        console.log(data.errors);
      }
    })
  //fetch New user Info
}

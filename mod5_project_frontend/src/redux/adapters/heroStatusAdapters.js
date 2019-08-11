import actions from "../actions/heroStatusActions";

export const initGame = characterInfo => dispatch => {
  dispatch(actions.initGameAction(characterInfo));
};

export const updateHeroStatus = status => dispatch => {
  dispatch(actions.updateHeroStatusAction(status));
  // console.log(status.id);
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: localStorage.token
    },
    body: JSON.stringify(status)
  }
  fetch(`http://localhost:3000/characters/${status.id}`, config)
    .then(rsp => rsp.json())
    .then(console.log)
    // debugger
};

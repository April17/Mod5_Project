import actions from "../actions/heroStatusActions";
import { API_ROOT } from '../../actioncable';

export const initGame = characterInfo => dispatch => {
  dispatch(actions.initGameAction(characterInfo));
};

export const updateHeroStatus = status => dispatch => {
  dispatch(actions.updateHeroStatusAction(status));
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.token
    },
    body: JSON.stringify(status)
  }
  fetch(`${API_ROOT}/characters/${status.id}`, config)
};

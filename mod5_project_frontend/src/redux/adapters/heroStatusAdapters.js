import actions from "../actions/heroStatusActions";

export const initGame = characterInfo => dispatch => {
  dispatch(actions.initGameAction(characterInfo));
};

export const updateHeroStatus = status => dispatch => {
  dispatch(actions.updateHeroStatusAction(status));
};

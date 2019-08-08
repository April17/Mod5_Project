import actions from "../actions/heroMoveAction";

export const updateHeroStatus = status => dispatch => {
  dispatch(actions.updateHeroStatusAction(status));
};

import actions from "../actions/heroStatusAction";

export const updateHeroStatus = status => dispatch => {
  dispatch(actions.updateHeroStatusAction(status));
};

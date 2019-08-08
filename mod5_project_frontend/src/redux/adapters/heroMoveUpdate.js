import action from "../actions/heroMoveAction";

export const updateHeroMove = coords => dispatch => {
  dispatch(action.updateHeroMoveAction(coords));
};

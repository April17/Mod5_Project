import actions from "../actions/utilityActions";

export const modalToggle = modalState => dispatch => {
  dispatch(actions.modalToggle(modalState))
};

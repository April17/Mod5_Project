import actions from "../actions/utilityActions";

export const modalToggle = modalState => dispatch => {
  dispatch(actions.modalToggle(modalState))
};

export const monsterHpToggle = state => dispatch => {
  dispatch(actions.monsterHpToggle(state))
}

import actions from "../actions/monsterStatusActions";
// import { API_ROOT } from '../../actioncable';
export const updateMonsterStatus = status => dispatch => {
  dispatch(actions.updateMonsterStatusAction(status));

};

import actions from "../actions/monsterStatusActions";
// import { API_ROOT } from '../../actioncable';
export const updateMonsterStatus = status => dispatch => {
  dispatch(actions.updateMonsterStatusAction(status));
  // const config = {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: localStorage.token
  //   },
  //   body: JSON.stringify(status)
  // }
  // fetch(`${API_ROOT}/characters/${status.id}`, config)
};

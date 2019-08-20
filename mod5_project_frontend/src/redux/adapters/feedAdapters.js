import actions from "../actions/feedActions";
import {KeyGenerator} from '../../utility/utilities'
const key = new KeyGenerator()
export const addLog = logData => dispatch => {
  dispatch(actions.addLog({...logData, key: key.counter()}))
};

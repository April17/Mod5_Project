import actions from "../actions/feedActions";

export const addLog = logData => dispatch => {
  dispatch(actions.addLog(logData))
};

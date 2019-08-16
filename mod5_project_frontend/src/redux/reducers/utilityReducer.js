const defaultState = {
  edit_account_modal: false,
  create_character_modal: false,
  delete_accout_modal: false,
}
export default (state = defaultState, action) => {

  switch (action.type) {
    case 'MODAL_TOGGLE':
      return {...state, [Object.keys(action.payload)[0]]: Object.values(action.payload)[0]}
    default:
      return state
  }
}

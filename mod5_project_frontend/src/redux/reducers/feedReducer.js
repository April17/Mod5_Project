const defaultState = {
  chat: [ {summary: "-Welcome Back to Doungeon Online."},
          {summary: "-Chat is under Development ATM."},],
  log: []
}

export default (state = defaultState, action) => {

  switch (action.type) {
    case 'ADD_LOG':
      state.log = [...state.log, action.payload]
      return state
    case 'ADD_CHAT':
      return {...state, chat: [...state.chat, action.payload]}
    default:
      return state
  }
}

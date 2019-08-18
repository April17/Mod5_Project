const defaultState = {
  chat: [ {summary: "-Welcome Back to Doungeon Online."},
          {summary: "-Chat is under Development ATM."},
          {summary: "-[April]: Hi guys", key: 1}],
  log: []
}

export default (state = defaultState, action) => {

  switch (action.type) {
    case 'ADD_LOG':
      state.log = [...state.log, action.payload]
      return state
    case 'ADD_CHAT':
      state.chat = [...state.chat, action.payload]
      return state
    default:
      return state
  }
}

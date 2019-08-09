const defaultState = {
  username: "",
  name: "",
  characters: [
    {
      id: 0,
      name: "",
      hp: 1,
      atk: 0,
      def: 0,
      x: 0,
      y: 0,
      items:[
        {
          id: 0,
          name: "",
          effect: "",
          key: "",
          status: ""
        }
      ]
    }
  ]
}

export default (state = defaultState, action) => {
  // console.log('in root reducer', action);

  switch (action.type) {
    case 'GOT_USER_INFO':
      return action.payload
    case 'LOGIN_FAIL':
      return {...state}
    default:
      return state
  }
}

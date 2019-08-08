const defaultState = {
  x: 0,
  y: 0
}

export default (state = defaultState, action) => {
  // console.log('in root reducer', action);

  switch (action.type) {
    case 'HERO_MOVE':
      return action.payload
    default:
      return state
  }
}

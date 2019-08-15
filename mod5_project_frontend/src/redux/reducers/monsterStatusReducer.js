const defaultState = {
  id: 0,
  name: "Unknown",
  hp: 1,
  atk: 10,
  def: 10,
  x: 500,
  y: 500
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'MONSTER_STATUS':
      return action.payload
    default:
      return state
  }
}

const defaultState = {
  id: 0,
  name: "",
  level: 1,
  exp_next_level: 100,
  exp: 0,
  max_hp: 100,
  hp: 1,
  atk: 10,
  def: 10,
  x: 500,
  y: 500,
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

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'INIT_GAME':
      return action.payload
    case 'HERO_STATUS':
      return action.payload
    default:
      return state
  }
}

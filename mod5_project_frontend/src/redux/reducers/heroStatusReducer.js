const defaultState = {
  id: 0,
  name: "",
  hp: 1,
  atk: 10,
  def: 10,
  x: 500,
  y: 500
  // items:[
  //   {
  //     id: 0,
  //     name: "",
  //     effect: "",
  //     key: "",
  //     status: ""
  //   }
  // ]
}

export default (state = defaultState, action) => {
  // console.log('in root reducer', action);

  switch (action.type) {
    case 'INIT_GAME':
      return action.payload
    case 'HERO_STATUS':
      return action.payload
    default:
      return state
  }
}

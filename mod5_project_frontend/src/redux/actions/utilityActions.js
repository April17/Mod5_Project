export default {
  modalToggle: state => ({ type: "MODAL_TOGGLE", payload: state }),
  monsterHpToggle: state => ({ type: "MONSTER_HP_TOGGLE", payload: state}),
  uiToggle: state => ({type: "UI_TOGGLE", payload: state})
};

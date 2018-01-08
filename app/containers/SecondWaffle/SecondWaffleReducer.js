export default function SecondWaffleReducer(state = [], action) {
  switch (action.type) {
    case 'SECOND_WAFFLE_CLICK_SQUARE':
      console.log('Second waffle square clicked #' + action.index);
      return state.setIn([action.index, 'color'], '#ffffff');
    default:
      return state;
  }
}

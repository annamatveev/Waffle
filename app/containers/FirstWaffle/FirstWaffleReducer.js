export default function FirstWaffleReducer(state = [], action) {
  switch (action.type) {
    case 'FIRST_WAFFLE_CLICK_SQUARE':
      console.log('First waffle reducer #' + action.index);
      return state.setIn([action.index, 'color'], '#ffffff');
    default:
      return state;
  }
}

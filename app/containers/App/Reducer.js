export default function GridReducer(state = [], action) {
  switch (action.type) {
    case 'ANNA_CLICK_SQUARE':
      console.log('ANNA_SQUARE_CLICKED event received by reducer with index ' + action.index);
      return state.setIn(['annaSquares', 'squares', action.index, 'color'], '#ffffff');
    case 'DANIEL_CLICK_SQUARE':
      console.log('DANIEL_SQUARE_CLICKED event received by reducer with index ' + action.index);
      return state.setIn(['danielSquares', 'squares', action.index, 'color'], '#ffffff');
    default:
      return state;
  }
}

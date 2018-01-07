export default function GridReducer(state = [], action) {
  switch (action.type) {
    case 'CLICK_SQUARE':
      console.log('SQUARE_CLICKED event received by reducer with index ' + action.index);
      return state.setIn(['squares', action.index, 'color'], '#ffffff');
    default:
      return state;
  }
}

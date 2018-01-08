import { fromJS } from 'immutable';

const colors = [ 'FF00BF', 'FF0000', 'FFBF00', '80FF00', '00FF40', '00FFFF', '7F00FF', 'FF00BF' ];
function getRandomColor() {
    return '#' + colors[Math.floor(Math.random() * colors.length)];
}

export default function GridReducer(state = [], action) {
  switch (action.type) {
    case 'SQUARE_CLICK':
      return state.setIn(['squares', action.index, 'color'], getRandomColor());
    case 'ADD_SQUARE':
        let nextSquareId = state.getIn(['grid', 'squares']).size.toString();
        let newSquare = fromJS({ id: nextSquareId, color: 'white' });
        return state.setIn(['squares', nextSquareId], newSquare).updateIn(['grid', 'squares'], arr => arr.push(nextSquareId) );

    default:
      return state;
  }
}

export default function GridReducer(state = [], action) {
  switch (action.type) {
    case 'CLICK_SQUARE':
      console.log('SQUARE_CLICKED event received by reducer with index ' + action.index)
      return {
        squares: state.squares.map((item, index) => {
          if (index !== action.index) {
            return item;
          }
          console.log('Found matching item with index ' + index);
          return {
            ...item,
            color: '#ffffff',
          };
        }),
      };
    default:
      return state;
  }
}

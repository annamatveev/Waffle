export default function GridReducer(state = [], action) {
  switch (action.type) {
    case 'SQUARE_CLICKED':
      return state.map((item, index) => {
        if (index !== action.index) {
          return item;
        }
        return {
          ...item,
          color: '#ffffff',
        };
      });
    default:
      return state;
  }
}

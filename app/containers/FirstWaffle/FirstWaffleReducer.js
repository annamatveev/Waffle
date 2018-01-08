export default function FirstWaffleReducer(state = [], action) {
  switch (action.type) {
    case 'FIRST_WAFFLE_CLICK_SQUARE':
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

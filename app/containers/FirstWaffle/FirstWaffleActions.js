export default function ClickOnFirstWaffleSquareActionCreator(index) {
  console.log('First waffle action fired #' + index);
  return {
    index,
    type: 'FIRST_WAFFLE_CLICK_SQUARE',
  };
}
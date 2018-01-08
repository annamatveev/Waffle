export default function ClickOnSecondWaffleSquareActionCreator(index) {
  console.log('Second waffle action fired #' + index);
  return {
    index,
    type: 'SECOND_WAFFLE_CLICK_SQUARE',
  };
}

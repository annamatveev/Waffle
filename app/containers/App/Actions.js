export default function clickOnSquare(index) {
  console.log('CLICK_SQUARE event fired by action creator with index ' + index);
  return {
    index: index,
    type: 'CLICK_SQUARE',
  };
}

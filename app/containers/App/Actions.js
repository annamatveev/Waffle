export function clickOnAnnaSquare(index) {
  console.log('Annas waffle action creator with index ' + index);
  return {
    index,
    type: 'ANNA_CLICK_SQUARE',
  };
}

export function clickOnDanielSquare(index) {
  console.log('Daniels waffle action creator with index ' + index);
  return {
    index,
    type: 'DANIEL_CLICK_SQUARE',
  };
}

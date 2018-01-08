export function clickOnSquare(index) {
  console.log('Square clicked with index ' + index);
  return {
    index,
    type: 'SQUARE_CLICK',
  };
}

export function addSquare() {
    console.log('Add Square');
    return {
        type: 'ADD_SQUARE',
    };
}
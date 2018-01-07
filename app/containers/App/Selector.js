import { createSelector } from 'reselect';

const selectAnnaSquares = (state) => state.get('annaSquares');
const selectDanielSquares = (state) => state.get('danielSquares');

const makeSelectAnnasWaffle = () => createSelector(
  selectAnnaSquares,
  (squaresState) => squaresState.get('squares'),
);

const makeSelectDanielsWaffle = () => createSelector(
  selectDanielSquares,
  (squaresState) => squaresState.get('squares'),
);

export {
  selectAnnaSquares,
  selectDanielSquares,
  makeSelectAnnasWaffle,
  makeSelectDanielsWaffle,
};
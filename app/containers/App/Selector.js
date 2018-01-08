import { createSelector } from 'reselect';

const selectGrid = (state) => state.get('grid');
const selectSquares  = (state) => state.get('squares');

const makeSelectGridSquares = () => createSelector(
    selectGrid,
    (gridState) => gridState.get('squares'),
);

const makeSelectSquare = (id) => createSelector(
    selectSquares,
    (squaresState) => squaresState.get(id),
);

export {
    selectSquares,
    selectGrid,
    makeSelectGridSquares,
    makeSelectSquare,
};
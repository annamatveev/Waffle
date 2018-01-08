import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSquares } from '../App/Selector'
import Square from '../../components/Square/Square'


const mapStateToProps = (state, ownProps) => {
  const { squareId } = ownProps;
  const square = selectSquares(state).get(squareId);
  return {
      squareId: square.get('id'),
      color: square.get('color'),
  };
};


const ConnectedSquare = connect(mapStateToProps, null)(Square);
export default ConnectedSquare;

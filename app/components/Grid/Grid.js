import React, { Component } from 'react';
import ConnectedSquare from '../../containers/ConnectedSquare';
import './Grid.css';


class Grid extends Component {
  render() {
    const { squares, handleSquare } = this.props;
    console.log('Grid is rendering: ', this.props.squares.toJS());
    return (
      <div className="grid">
        { squares.map(squareId => <ConnectedSquare key={squareId} squareId={squareId} handleSquare={handleSquare} />) }
      </div>
    );
  }
}

export default Grid;

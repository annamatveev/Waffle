import React, { Component } from 'react';
import Square from '../Square/Square';
import './Grid.css';

class Grid extends Component {
  render() {
    const { squares, handleSquare } = this.props;
    console.log('Grid is rendering');
    return (
      <div className="grid">
        { squares.map(square => <Square key={square.toJS().id}
                                        square={square}
                                        handleSquare={handleSquare} />) }
      </div>
    );
  }
}

export default Grid;

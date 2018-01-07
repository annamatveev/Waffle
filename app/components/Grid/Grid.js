import React, { Component } from 'react';
import Square from '../Square/Square';
import './Grid.css';

class Grid extends Component {
  render() {
    const { squares } = this.props;
    console.log('Grid is rendering');
    return (
      <div className="grid">
        { squares.map(square => <Square key={square.id} square={square} />) }
      </div>
    );
  }
}

export default Grid;

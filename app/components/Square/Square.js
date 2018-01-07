import React, { Component } from 'react';
import './Square.css';

class Grid extends Component {
  render() {
    const { square, handleSquare } = this.props;
    console.log('Square #' + square.id + ' is rendering');
    return (
      <section className="square"
               style={{ backgroundColor: square.color }}
               onClick={() => handleSquare(square.id)}>
        <div className="square-data">{square.id}</div>
      </section>
    );
  }
}

export default Grid;

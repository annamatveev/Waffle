import React, { Component } from 'react';
import './Square.css';

class Grid extends Component {
  render() {
    const { square } = this.props;
    console.log('Square #' + square.id + ' is rendering');
    return (
      <section className="square" style={{ backgroundColor: square.color }} >
        <div className="square-data">{square.id}</div>
      </section>
    );
  }
}

export default Grid;

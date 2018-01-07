import React, { Component } from 'react';
import './Square.css';

class Grid extends Component {
  render() {
    const { square } = this.props;
    return (
      <section className="square" style={{ backgroundColor: square.color }} >
        <div className="square-data">{square.id}</div>
      </section>
    );
  }
}

export default Grid;

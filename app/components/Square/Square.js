import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  // shouldComponentUpdate(nextProps) {
  //   return !Object.is(this.props.square, nextProps.square);
  // }
  render() {
    const { square, handleSquare } = this.props;
    console.log('Square #' + square.id + ' is rendering');
    return (
      <section
        className="square"
        style={{ backgroundColor: square.color }}
        onClick={() => handleSquare({ index: square.id })}
      >
        <div className="square-data">{square.id}</div>
      </section>
    );
  }
}

export default Square;

import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  shouldComponentUpdate(nextProps) {
    return !Object.is(this.props.square, nextProps.square);
  }
  render() {
    const { square, handleSquare } = this.props;
    console.log('Square #' + square.toJS().id + ' is rendering');
    return (
      <section className="square"
               style={{ backgroundColor: square.toJS().color }}
               onClick={() => handleSquare(square.toJS().id)}>
        <div className="square-data">{square.toJS().id}</div>
      </section>
    );
  }
}

export default Square;

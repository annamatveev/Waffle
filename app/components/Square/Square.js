import React, { Component } from 'react';
import './Square.css';

class Square extends Component {

  render() {
    const { squareId, color,  handleSquare } = this.props;
    console.log('Square #' +  squareId + ' is rendering');
    return (
      <section className="square"
               style={{ backgroundColor: color }}
               onClick={() => handleSquare(squareId)}>
        <div className="square-data">{squareId}</div>
      </section>
    );
  }
}

export default Square;

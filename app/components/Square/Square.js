import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Square.css';

class Square extends Component {
  shouldComponentUpdate(nextProps) {
    return !Object.is(this.props.square, nextProps.square);
  }
  render() {
    const { square, handleSquare } = this.props;
    console.log('Square #' + square.toJS().id + ' is rendering');
    return (
      <section
        className="square"
        style={{ backgroundColor: square.toJS().color }}
        onClick={() => handleSquare({index: square.toJS().id })}
      >
        <div className="square-data">{square.toJS().id}</div>
      </section>
    );
  }
}

Square.propTypes = {
  square: PropTypes.object.isRequired,
  handleSquare: PropTypes.func.isRequired,
};

export default Square;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ClickOnSecondWaffleSquareActionCreator from './SecondWaffleActions';
import Square from '../../components/Square/Square';
import './SecondWaffle.css';

class SecondWaffle extends Component {
  render() {
    const { secondWaffle, clickOnSecondWaffleSquare } = this.props;
    console.log('Second waffle is rendering...');
    return (
      <div className="grid">
        { secondWaffle.map(square =>
          (
            <Square
              key={square.id}
              square={square}
              handleSquare={clickOnSecondWaffleSquare}
            />
          ))
        }
      </div>
    );
  }
}

SecondWaffle.propTypes = {
  secondWaffle: PropTypes.array.isRequired,
  clickOnSecondWaffleSquare: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    secondWaffle: state.secondWaffle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnSecondWaffleSquare:
      ({ index }) => dispatch(ClickOnSecondWaffleSquareActionCreator(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondWaffle);


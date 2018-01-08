import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ClickOnFirstWaffleSquareActionCreator from './FirstWaffleActions';
import Square from '../../components/Square/Square';
import './FirstWaffle.css';

class FirstWaffle extends Component {
  render() {
    const { firstWaffle, clickOnFirstWaffleSquare } = this.props;
    console.log('First waffle is rendering...');
    return (
      <div className="grid">
        { firstWaffle.map(square =>
          (
            <Square
              key={square.toJS().id}
              square={square}
              handleSquare={clickOnFirstWaffleSquare}
            />
          ))
        }
      </div>
    );
  }
}

FirstWaffle.propTypes = {
  firstWaffle: PropTypes.object.isRequired,
  clickOnFirstWaffleSquare: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    firstWaffle: state.firstWaffle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnFirstWaffleSquare: ({ index }) => dispatch(ClickOnFirstWaffleSquareActionCreator(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstWaffle);


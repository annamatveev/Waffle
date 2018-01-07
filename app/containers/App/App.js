import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '../../components/Grid/Grid';

class App extends Component {
  render() {
    const { squares } = this.props;
    return (
      <div className="app">
        <Grid squares={squares} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    squares: state.squares,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: () => dispatch(),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

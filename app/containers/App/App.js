import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Feed from '../Feed/Feed';
import './App.css';

const App = ({ feed }) => (
      <div className="app">
        <Feed feed={feed} />
      </div>
);

const mapStateToProps = (state) => {
  return {
    feed: state.feed,
  };
};

App.propTypes = {
  feed: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(App);

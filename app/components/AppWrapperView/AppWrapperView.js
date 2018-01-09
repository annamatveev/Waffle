import React from 'react';
import PropTypes from 'prop-types';
import './AppWrapperView.css';

import AddItemButton from '../AddItemButton/AddItemButton';
import Feed from '../../containers/Feed/Feed';

const AppWrapperView = ({ feed, clickOnAddItemButton }) => (
  <div className="app">
    <AddItemButton clickOnAddItemButton={clickOnAddItemButton} />
    <Feed feed={feed} />
  </div>
);

AppWrapperView.propTypes = {
  feed: PropTypes.object.isRequired,
  clickOnAddItemButton: PropTypes.func.isRequired,
};

export default AppWrapperView;

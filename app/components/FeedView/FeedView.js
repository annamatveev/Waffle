/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';

import FeedItem from '../../containers/Feed/FeedItem/FeedItem';
import AddItemButton from '../AddItemButton/AddItemButton';
import './FeedView.css';

const Feed = ({ feedItems, clickOnAddItemButton }) => (
  <div className="feed">
    { feedItems.map(function(feedItemGuid) {
      return <FeedItem key={feedItemGuid} feedItemGuid={feedItemGuid} />;
    })}
    <AddItemButton clickOnAddItemButton={clickOnAddItemButton} />
  </div>
);

Feed.propTypes = {
  feedItems: PropTypes.array.isRequired,
  clickOnAddItemButton: PropTypes.func.isRequired,
};

export default Feed;

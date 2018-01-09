/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';

import FeedItem from '../../containers/Feed/FeedItem/FeedItem';

import './FeedView.css';

const Feed = ({ feedItems }) => (
  <div className="feed">
    { feedItems.map(function(feedItemGuid) {
      return <FeedItem key={feedItemGuid} feedItemGuid={feedItemGuid} />;
    })}
  </div>
);

Feed.propTypes = {
  feedItems: PropTypes.object.isRequired,
};

export default Feed;

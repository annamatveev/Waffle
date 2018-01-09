import React from 'react';
import PropTypes from 'prop-types';
import './FeedItemView.css';

const FeedItemView = ({ feedItemGuid, feedItemColor, clickOnFeedItem }) => (
      <section
        className="square"
        style={{ backgroundColor: feedItemColor }}
        onClick={() => clickOnFeedItem({ feedItemGuid })}
      >
        <div className="square-data">{feedItemGuid}</div>
      </section>
);

FeedItemView.propTypes = {
  feedItemGuid: PropTypes.string.isRequired,
  feedItemColor: PropTypes.string.isRequired,
  clickOnFeedItem: PropTypes.func.isRequired,
};

export default FeedItemView;

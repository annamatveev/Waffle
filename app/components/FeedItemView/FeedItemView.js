import React from 'react';
import PropTypes from 'prop-types';
import './FeedItemView.css';

const FeedItemView = ({ feedItemId, feedItemColor, clickOnFeedItem }) => (
      <section
        className="square"
        style={{ backgroundColor: feedItemColor }}
        onClick={() => clickOnFeedItem({ feedItemId })}
      >
        <div className="square-data">{feedItemId}</div>
      </section>
);

FeedItemView.propTypes = {
  feedItemId: PropTypes.number.isRequired,
  feedItemColor: PropTypes.string.isRequired,
  clickOnFeedItem: PropTypes.func.isRequired,
};

export default FeedItemView;

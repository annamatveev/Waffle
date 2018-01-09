import React from 'react';
import PropTypes from 'prop-types';
import './FeedItemView.css';

const FeedItemView = ({ feedItemGuid, feedItemColor, feedItemTitle, feedItemBody, clickOnFeedItem }) => (
      <section
        className="feed-item"
        style={{ backgroundColor: feedItemColor }}
        onClick={() => clickOnFeedItem({ feedItemGuid })}
      >
        <div className="feed-item-data">
          <h1 className="feed-item-title">{feedItemTitle}</h1>
          <div className="feed-item-body">{feedItemBody}</div>
        </div>
      </section>
);

FeedItemView.propTypes = {
  feedItemGuid: PropTypes.string.isRequired,
  feedItemColor: PropTypes.string.isRequired,
  clickOnFeedItem: PropTypes.func.isRequired,
  feedItemTitle: PropTypes.string.isRequired,
  feedItemBody: PropTypes.string.isRequired,
};

export default FeedItemView;

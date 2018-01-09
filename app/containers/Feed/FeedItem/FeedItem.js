import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FeedItemView from '../../../components/FeedItemView/FeedItemView';
import { UpdateColorActionCreator } from './FeedItemActions';
import { makeSelectFeedItem } from './FeedItemSelectors';

const mapStateToProps = createStructuredSelector({
  feedItemGuid: (state, ownProps) => makeSelectFeedItem(ownProps.feedItemGuid)(state, ownProps).get('guid'),
  feedItemColor: (state, ownProps) => makeSelectFeedItem(ownProps.feedItemGuid)(state, ownProps).get('color'),
  feedItemTitle: (state, ownProps) => makeSelectFeedItem(ownProps.feedItemGuid)(state, ownProps).get('title'),
  feedItemBody: (state, ownProps) => makeSelectFeedItem(ownProps.feedItemGuid)(state, ownProps).get('body'),
});

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnFeedItem: ({ feedItemGuid }) => dispatch(UpdateColorActionCreator(feedItemGuid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedItemView);

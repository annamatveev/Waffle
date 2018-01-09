import { connect } from 'react-redux';
import FeedItemView from '../../../components/FeedItemView/FeedItemView';
import { UpdateColorActionCreator } from './FeedItemActions';

const mapStateToProps = (state, ownProps) => {
  const { feedItemGuid } = ownProps;
  const feedItem = state.items.get(feedItemGuid);
  return {
    feedItemGuid: feedItem.get('guid'),
    feedItemColor: feedItem.get('color'),
    feedItemTitle: feedItem.get('title'),
    feedItemBody: feedItem.get('body'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnFeedItem: ({ feedItemGuid }) => dispatch(UpdateColorActionCreator(feedItemGuid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedItemView);

import { connect } from 'react-redux';
import FeedItemView from '../../../components/FeedItemView/FeedItemView';
import { UpdateColorActionCreator } from './FeedItemActions';

const mapStateToProps = (state, ownProps) => {
  const { feedItemGuid } = ownProps;
  const feedItem = state.items[feedItemGuid];
  return {
    feedItemGuid: feedItem.guid,
    feedItemColor: feedItem.color,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnFeedItem: ({ feedItemGuid }) => dispatch(UpdateColorActionCreator(feedItemGuid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedItemView);

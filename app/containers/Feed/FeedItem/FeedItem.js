import { connect } from 'react-redux';
import FeedItemView from '../../../components/FeedItemView/FeedItemView';
import { UpdateColorActionCreator } from './FeedItemActions';

const mapStateToProps = (state, ownProps) => {
  const { feedItemId } = ownProps;
  const feedItem = state.items[feedItemId];
  return {
    feedItemId: feedItem.id,
    feedItemColor: feedItem.color,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnFeedItem: ({ feedItemId }) => dispatch(UpdateColorActionCreator(feedItemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedItemView);

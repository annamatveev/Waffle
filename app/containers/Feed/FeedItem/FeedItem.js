import {connect} from 'react-redux';
import FeedItemView from '../../../components/FeedItemView/FeedItemView';
import {UpdateColorActionCreator} from './FeedItemActions';

const mapStateToProps = (state, ownProps) => {
  const { feedItemGuid } = ownProps;
  let feedItem = state.items.filter(function (item) {
    return item.guid.localeCompare(feedItemGuid) === 0;
  });
  feedItem = feedItem ? feedItem[0] : { guid: '', color: '' };
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

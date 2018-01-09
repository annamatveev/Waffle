import { connect } from 'react-redux';
import FeedView from '../../components/FeedView/FeedView';
import { AddItemActionCreator } from './FeedActions';

const mapStateToProps = (state) => {
  return {
    feedItems: state.feed.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnAddItemButton: () => dispatch(AddItemActionCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedView);


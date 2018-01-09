import { connect } from 'react-redux';
import FeedView from '../../components/FeedView/FeedView';

const mapStateToProps = (state) => {
  return {
    feedItems: state.feed.items,
  };
};

export default connect(mapStateToProps, null)(FeedView);


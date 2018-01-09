import { connect } from 'react-redux';
import AppWrapperView from '../../components/AppWrapperView/AppWrapperView';

import { AddItemActionCreator } from '../Feed/FeedActions';

const mapStateToProps = (state) => {
  return {
    feed: state.feed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnAddItemButton: () => dispatch(AddItemActionCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapperView);

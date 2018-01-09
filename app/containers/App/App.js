import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectFeedItems } from './AppSelectors';

import AppWrapperView from '../../components/AppWrapperView/AppWrapperView';
import { AddItemActionCreator } from '../Feed/FeedActions';

const mapStateToProps = createStructuredSelector({
  feed: makeSelectFeedItems(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    clickOnAddItemButton: () => dispatch(AddItemActionCreator()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AppWrapperView);

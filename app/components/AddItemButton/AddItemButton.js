import React from 'react';
import PropTypes from 'prop-types';
import './AddItemButton.css';

const AddItemButton = ({ clickOnAddItemButton }) => (
  <div className="add-item-button">
    <button
      className="btn btn-large btn-green btn-radius"
      onClick={() => clickOnAddItemButton()}
    >
      Add Item
    </button>
  </div>
);

AddItemButton.propTypes = {
  clickOnAddItemButton: PropTypes.func.isRequired,
};

export default AddItemButton;

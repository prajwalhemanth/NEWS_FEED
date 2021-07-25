// this will invoke when the user Focus on  chips input field
export const onAddChipsList = (index) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_CHIPS', payload: index });
  };
};

// removes chips from input field when user click on close icon 
export const removeChips = (index) => {
  return (dispatch) => {
    dispatch({ type: 'REMOVE_CHIPS', payload: index });
  };
};

// this will invoke when the user trying to search something from chips input field
export const onSearchChipsText = (text) => {
  return (dispatch) => {
    dispatch({ type: 'ON_SEARCH_LIST', payload: text });
  };
};

// this will invoke when the user Focus on  chips input field
export const onFocusChipsField = () => {
  return (dispatch) => {
    dispatch({ type: 'ON_FOCUS_CHIPS_LIST', payload: '' });
  };
};


// removes chips from input field when press backspace key

export const deleteChips = () => {
  return (dispatch) => {
    dispatch({ type: 'DELETE_CHIPS', payload: '' });
  };
};




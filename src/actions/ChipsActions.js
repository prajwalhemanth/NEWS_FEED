
export const onAddChipsList = (index) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_CHIPS', payload: index });
  };
};


export const removeChips = (index) => {
  return (dispatch) => {
    dispatch({ type: 'REMOVE_CHIPS', payload: index });
  };
};


export const onSearchChipsText = (text) => {
  return (dispatch) => {
    dispatch({ type: 'ON_SEARCH_LIST', payload: text });
  };
};


export const onFocusChipsField = () => {
  return (dispatch) => {
    dispatch({ type: 'ON_FOCUS_CHIPS_LIST', payload: '' });
  };
};




export const deleteChips = () => {
  return (dispatch) => {
    dispatch({ type: 'DELETE_CHIPS', payload: '' });
  };
};




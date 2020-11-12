const editReducer = (state, action) => {
  switch(action.type) {
  case 'editEventUpdate':
    return { ...state, inputValue: action.payload };
  case 'editEventPatch':
    return { ...state };
  }
};

export default editReducer;
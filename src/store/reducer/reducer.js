import * as types from '../../constant/types';

function reducer(state, action) {
  const initialState = {
    data: [],
    inputValue: '',
  };
  state = state || initialState;

  switch(action.type) {
  case types.UPDATE_ALL_DATA:
    return { ...state, data: [...action.payload] };
  case types.INPUT_VALUE_CHANGE:
    return { ...state, inputValue: action.inputValue };
  case types.ADD_EVENT:
  {
    let preId = state.data[state.data.length - 1].id;
    const newEvent = {
      id: preId + 1,
      ...action.payload,
      completed: false
    };
    return { ...state, data: [...state.data, newEvent] };
  }
    
  default:
    return state;
  }
}

export default reducer;
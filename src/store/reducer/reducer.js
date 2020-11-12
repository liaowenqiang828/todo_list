import * as types from '../../constant/types';

function reducer(state, action) {
  const initialState = {
    data: [],
    inputValue: '',
    visible: false,
    modalInput: ''
  };
  state = state || initialState;

  switch(action.type) {
  case types.UPDATE_ALL_DATA:
    return { ...state, data: [...action.payload] };

  case types.INPUT_VALUE_CHANGE:
    return { ...state, inputValue: action.inputValue };

  case types.MODAL_VISIBLE_CHANGE:
    return { ...state, visible: !state.visible };

  case types.MODAL_INPUT_VALUE_CHANGE:
    return { ...state, modalInput: action.modalInput };
    
  default:
    return state;
  }
}

export default reducer;
import * as types from '../../constant/types';
import { checkIsShowAllDeleteCompletedButton, 
  checkCompletedBtnIsAbled } from '../action/actions';

function reducer(state, action) {
  const initialState = {
    data: [],
    inputValue: '',
    visible: false,
    modalInput: '',
    checked: false,
    isShowAllDeleteCompletedButton: [],
    checkedIdList: []
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

  case types.ALL_CHECKED_STATUS:
    return { ...state, checked: !action.isAllChecked };

  case types.IS_SHOW_ALL_DELETE_COMPLETED_BUTTON:
    return { ...state, isShowAllDeleteCompletedButton: action.isShowAllDeleteCompletedButton };

  case types.ADD_OR_REMOVE_CHECKED_EVENT_ID: {
    let newCheckedIdList = state.checkedIdList;
    if (state.checkedIdList.includes(action.id)) {
      newCheckedIdList.splice(state.checkedIdList.indexOf(action.id), 1);
    } else {
      newCheckedIdList.push(action.id);
    }
    return { ...state, checkedIdList: newCheckedIdList };
  }

  case types.ADD_OR_REMOVE_ALL_ITEMS_ID: {
    let newCheckedIdList = [];

    if (!action.isAllChecked) {
      newCheckedIdList = state.data.map(item => {
        return item.id;
      });
    }
    return { ...state, checkedIdList: newCheckedIdList };
  }

  case types.INITIAL_CHECKED_LIST: {
    let initialCheckedIdList = state.data
      .filter(item => { return item.checked === true; })
      .map(item => { return item.id; });
    return { ...state, checkedIdList: initialCheckedIdList };
  }

  case types.INITIAL_SHOW_DELETE_AND_COMPLETE_BTN: {
    const checkedIdList = state.checkedIdList;
    const isShowAllDeleteCompletedButton = checkIsShowAllDeleteCompletedButton(checkedIdList);
    const isCompleteButtonAbled = checkCompletedBtnIsAbled(state.data, checkedIdList);
    return { ...state, 
      isShowAllDeleteCompletedButton: [isShowAllDeleteCompletedButton, isCompleteButtonAbled] };
  }
    
  default:
    return state;
  }
}

export default reducer;
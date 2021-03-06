import * as types from "../../constant/types";

export const eventInputActionCreator = (inputValue) => {
  return {
    type: types.INPUT_VALUE_CHANGE,
    inputValue
  };
};

export const modalInputActionCreator = (modalInput) => {
  return {
    type: types.MODAL_INPUT_VALUE_CHANGE,
    modalInput
  };
};

export const updateDataActionCreator = (data) => {
  return {
    type: types.UPDATE_ALL_DATA,
    payload: data
  };
};

export const changeModalVisibleActionCreator = () => {
  return {
    type: types.MODAL_VISIBLE_CHANGE,
  };
};

export const changeCheckedStatusActionCreator = () => {
  return {
    type: types.CHECKED_STATUS
  };
};

export const changeAllCheckedStatusActionCreator = (isAllChecked) => {
  return {
    type: types.ALL_CHECKED_STATUS,
    isAllChecked
  };
};

export const addOrRemoveTheCheckedItemIdToListActionCreator = (id) => {
  return {
    type: types.ADD_OR_REMOVE_CHECKED_EVENT_ID,
    id
  };
};

export const addOrRemoveAllItemIdToListActionCreator = (isAllChecked) => {
  return {
    type: types.ADD_OR_REMOVE_ALL_ITEMS_ID,
    isAllChecked
  };
};

export const initialCheckedIdListActionCreator = () => {
  return {
    type: types.INITIAL_CHECKED_LIST
  };
};

export const isShowAllDeleteCompletedButtonActionCreator = () => {
  return {
    type: types.IS_SHOW_ALL_DELETE_COMPLETED_BUTTON
  };
};

export const deleteAllEventsByIdsActionCreator = () => {
  return {
    type: types.DELETE_ALL_EVENTS_BY_IDS
  };
};

export const completeAllEventsByidsActionCreator = () => {
  return {
    type: types.COMPLETE_ALL_EVENTS_BY_IDS
  };
};
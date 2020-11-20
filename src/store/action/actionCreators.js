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
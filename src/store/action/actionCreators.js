import * as types from "../../constant/types";

export const eventAddActionCreator = (event) => {
  return {
    type: types.ADD_EVENT,
    event,
  };
};

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
import * as types from "../../constant/types";

export const eventAddActionCreator = (event) => {
    return {
        type: types.ADD_EVENT,
        event,
    }
};

export const eventInputActionCreator = (inputValue) => {
    return {
        type: types.INPUT_VALUE_CHANGE,
        inputValue
    }
};

export const updateDataActionCreator = (data) => {
    return {
        type: types.UPDATE_ALL_DATA,
        payload: data
    }
};
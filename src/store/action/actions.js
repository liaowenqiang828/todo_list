import { updateDataActionCreator, 
  eventInputActionCreator,
  modalInputActionCreator,
  changeModalVisibleActionCreator, 
  changeAllCheckedStatusActionCreator, 
  isShowAllDeleteCompletedButtonActionCreator } from './actionCreators';
import { message } from 'antd';
import { addEventDataRequest, 
  changeEventStatusByIdRequest, 
  deleteEventByIdRequest, 
  editEventRequest, 
  getAllDataRequest,
  changeAllCheckedStatusRequest,
  chengeCheckedStatusRequest } from '../../utils/http/axios';

export const getAllDataAction = () => {
  return (dispatch) => {
    getAllDataRequest()
      .then(data => {
        dispatch(isShowAllDeleteCompletedButtonActionCreator(
          checkIsShowAllDeleteCompletedButton(data)
        ));
        dispatch(updateDataActionCreator(data));
      })
      .catch(error => message.info(error.message));
  };
};

export const eventInputAction = (data) => {
  return (dispatch) => dispatch(eventInputActionCreator(data));
};

export const modalInputAction = (modalInput) => {
  return dispatch => dispatch(modalInputActionCreator(modalInput));
};

export const addEventData = (eventValue, timeStamp) => {
  return (dispatch) => {
    addEventDataRequest(eventValue, timeStamp)
      .then(() => getAllDataRequest())
      .then(data => {
        dispatch(updateDataActionCreator(data));
      });
  };
};

export const deleteEventByIdAction = (id) => {
  return (dispatch) => {
    deleteEventByIdRequest(id)
      .then(() => getAllDataRequest())
      .then(data => {
        dispatch(updateDataActionCreator(data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const changeStatusByIdAction = (id, completed, timeStamp) => {
  return (dispatch) => {
    changeEventStatusByIdRequest(id, completed, timeStamp)
      .then(() => getAllDataRequest())
      .then(data => {
        dispatch(updateDataActionCreator(data));
      });
  };
};

export const editEventAction = (id, newEvent, timeStamp) => {
  return (dispatch) => {
    editEventRequest(id, newEvent, timeStamp)
      .then(() => getAllDataRequest())
      .then(data => {
        dispatch(updateDataActionCreator(data));
      });
  };
};

export const changeModalVisibleAction = () => {
  return dispatch => {
    dispatch(changeModalVisibleActionCreator());
  };
};

export const changeCheckedStatusAction = (id, isChangeCheckedStatus) => {
  return dispatch => {
    chengeCheckedStatusRequest(id, isChangeCheckedStatus)
      .then(() => getAllDataRequest())
      .then(data => {
        dispatch(isShowAllDeleteCompletedButtonActionCreator(
          checkIsShowAllDeleteCompletedButton(data)
        ));
        dispatch(updateDataActionCreator(data));
      });
  };
};

export const changeAllCheckedStatusAction = (isAllChecked) => {
  return dispatch => {
    changeAllCheckedStatusRequest(isAllChecked)
      .then(() => getAllDataRequest())
      .then(data => {
        dispatch(isShowAllDeleteCompletedButtonActionCreator(
          checkIsShowAllDeleteCompletedButton(data)
        ));
        dispatch(changeAllCheckedStatusActionCreator(isAllChecked));
        dispatch(updateDataActionCreator(data));
      });
  };
};

export const isShowAllDeleteCompletedButtonAction = (isShowAllDeleteCompletedButton) => {
  return dispatch => 
    dispatch(isShowAllDeleteCompletedButtonActionCreator(isShowAllDeleteCompletedButton));
};

const checkIsShowAllDeleteCompletedButton = (data) => {
  const filtedData = data.filter(item => {
    return item.checked === true;
  });
  return filtedData.length > 0;
};

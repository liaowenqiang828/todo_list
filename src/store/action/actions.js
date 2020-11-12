import { updateDataActionCreator, 
  eventInputActionCreator,
  modalInputActionCreator,
  changeModalVisibleActionCreator } from './actionCreators';
import { message } from 'antd';
import { addEventDataRequest, 
  changeEventStatusByIdRequest, 
  deleteEventByIdRequest, 
  editEventRequest, 
  getAllDataRequest } from '../../utils/http/axios';

export const getAllDataAction = () => {
  return (dispatch) => {
    getAllDataRequest()
      .then(data => 
        dispatch(updateDataActionCreator(data))
      )
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

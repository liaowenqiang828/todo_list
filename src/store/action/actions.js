import axios from 'axios';
import { updateDataActionCreator, 
  eventInputActionCreator,
  modalInputActionCreator,
  changeModalVisibleActionCreator
} from './actionCreators';
import { message } from 'antd';
import { addEventDataRequest, 
  deleteEventByIdRequest, 
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
    axios(
      'http://localhost:8080/event',
      {
        method: 'PATCH',
        params: {
          id,
          completed,
          timeStamp
        }
      }
    )
      .then(() => {
        return axios.get("http://localhost:8080/lists");
      }
      )
      .then(response => {
        const data = response.data;
        dispatch(updateDataActionCreator(data));
      });
  };
};

export const editEventAction = (id, newEvent, timeStamp) => {
  return (dispatch) => {
    axios({
      url: 'http://localhost:8080/event',
      method: 'PATCH',
      params: {
        id,
        detail: newEvent,
        timeStamp,
      }
    })
      .then(() => {
        return axios.get("http://localhost:8080/lists");
      }
      )
      .then(response => {
        const data = response.data;
        dispatch(updateDataActionCreator(data));
      });
  };
};

export const changeModalVisibleAction = () => {
  return dispatch => {
    dispatch(changeModalVisibleActionCreator());
  };
};

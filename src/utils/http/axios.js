import axios from 'axios';
import qs from 'qs';
import { BASE_URL, ALL_DATA_PATH, EVENT_ITEM_PATH, IDS } from '../../constant/url';

export const getAllDataRequest = () => {
  return axios.get(BASE_URL + ALL_DATA_PATH)
    .then(response => {
      return response.data;
    });
};

export const addEventDataRequest = (eventValue, timeStamp) => {
  return axios.post(
    BASE_URL + EVENT_ITEM_PATH,
    {
      detail: eventValue,
      timeStamp,
    }
  );
};

export const deleteEventByIdRequest = (id) => {
  return axios.delete(
    BASE_URL + EVENT_ITEM_PATH + '/' + id
  );
};

export const changeEventStatusByIdRequest = (id, completed, timeStamp) => {
  return axios({
    url: BASE_URL + EVENT_ITEM_PATH,
    method: 'PATCH',
    params: {
      id,
      completed,
      timeStamp
    }
  });
};

export const editEventRequest = (id, newEvent, timeStamp) => {
  return axios({
    url: BASE_URL + EVENT_ITEM_PATH,
    method: 'PATCH',
    params: {
      id,
      detail: newEvent,
      timeStamp,
    }
  });
};

export const chengeCheckedStatusRequest = (id, isChangeCheckedStatus) => {
  return axios({
    url: BASE_URL + EVENT_ITEM_PATH,
    method: 'PATCH',
    params: {
      id,
      isChangeCheckedStatus,
    }
  });
};

export const changeAllCheckedStatusRequest = (isAllChecked) => {
  return axios({
    url: BASE_URL + ALL_DATA_PATH,
    method: 'PATCH',
    params: {
      isAllChecked
    }
  });
};

export const deleteAllEventsByIdsRequest = (checkedIdList) => {
  return axios({
    url: BASE_URL + IDS,
    method: 'delete',
    params: {
      checkedIdList
    },
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false });
    }
  });
};

export const completeAllEventsByidsRequest = (checkedIdList) => {
  return axios({
    url: BASE_URL + IDS,
    method: 'patch',
    params: {
      checkedIdList
    },
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false });
    }
  });
};
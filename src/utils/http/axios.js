import axios from 'axios';
import { BASE_URL, ALL_DATA_PATH, EVENT_ITEM_PATH } from '../../constant/url';

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
  )
    .then(() => getAllDataRequest());
};


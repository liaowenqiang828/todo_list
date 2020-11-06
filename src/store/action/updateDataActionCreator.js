import {UPDATE_ALL_DATA} from '../../constant/types';

const updateDataActionCreator = (data) => {
    return {
        type: UPDATE_ALL_DATA,
        payload: data
    }
}

export default updateDataActionCreator;
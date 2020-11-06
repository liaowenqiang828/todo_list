import axios from 'axios';
import updateDataActionCreator from './updateDataActionCreator';

const getAllDataAction = () => {
    return (dispatch) => {
        axios.get("http://localhost:8080/lists")
        .then(response => {
            const data = response.data;
            dispatch(updateDataActionCreator(data));
        })
    }
}

export default getAllDataAction;
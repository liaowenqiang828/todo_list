import axios from 'axios';
import updateDataAction from './updateDataAction';

const getAllDataAction = () => {
    return (dispatch) => {
        axios.get("http://localhost:8080/lists")
        .then(response => {
            const data = response.data;
            dispatch(updateDataAction(data));
        })
    }
}

export default getAllDataAction;
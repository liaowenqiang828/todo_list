import axios from "axios";
import updateDataActionCreator from "./updateDataActionCreator";

const addEventData = (eventValue) => {
    return (dispatch) => {
        axios.post(
            'http://localhost:8080/event',
            {
                detail: eventValue
            }
        )
        .then(() => {
            return axios.get("http://localhost:8080/lists")
        }
        )
        .then(response => {
            const data = response.data;
            dispatch(updateDataActionCreator(data));
        })
    }
}

export default addEventData;
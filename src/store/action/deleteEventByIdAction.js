import axios from "axios";
import updateDataActionCreator from "./updateDataActionCreator";

const deleteEventById = (id) => {
    return (dispatch) => {
        axios.delete(
            'http://localhost:8080/event/' + id
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

export default deleteEventById;
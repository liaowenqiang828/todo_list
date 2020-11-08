import axios from "axios";
import updateDataActionCreator from "./updateDataActionCreator";

const changeStatusByIdAction = (id, completed) => {
    return (dispatch) => {
        axios(
            'http://localhost:8080/event',
            {
                method: 'PATCH',
                params: {
                    id: id,
                    completed: completed,
                }
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

export default changeStatusByIdAction;
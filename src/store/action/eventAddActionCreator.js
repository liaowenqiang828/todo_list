import { ADD_EVENT } from "../../constant/types";

const eventAddActionCreator = (event) => {
    return {
        type: ADD_EVENT,
        event,
    }
}

export default eventAddActionCreator;
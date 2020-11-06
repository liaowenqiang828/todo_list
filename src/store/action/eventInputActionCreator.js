import {INPUT_VALUE_CHANGE} from "../../constant/types";

const eventInputActionCreator = (inputValue) => {
    return {
        type: INPUT_VALUE_CHANGE,
        inputValue
    }
}

export default eventInputActionCreator;
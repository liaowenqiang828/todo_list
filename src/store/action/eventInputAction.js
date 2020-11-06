import eventInputActionCreator from "./eventInputActionCreator";

const eventInputAction = (data) => {
    return (dispatch) => dispatch(eventInputActionCreator(data))
};

export default eventInputAction;
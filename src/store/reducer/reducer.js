import * as types from '../../constant/types'

function reducer(state, action) {
    const initialState = {
        data: [],
        inputValue: '',
    };
    state = state || initialState;

    switch(action.type) {
        case types.UPDATE_ALL_DATA:
            return {...state, data: [...action.payload]}
        case types.INPUT_VALUE_CHANGE:
            return {...state, inputValue: action.inputValue}
        default:
            return state;

    }
}

export default reducer;
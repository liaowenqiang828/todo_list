import * as types from '../../constant/types'

function reducer(state, action) {
    const initialState = {
        data: [],
    };
    state = state || initialState;

    switch(action.type) {
        case types.UPDATE_ALL_DATA:
            return {...state, data: [...state.data, action.payload]}
        default:
            return state;

    }
}

export default reducer;
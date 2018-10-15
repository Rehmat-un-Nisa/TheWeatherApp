import {
    GET_DATA,REQUEST_FAILED,SHOW_DATA_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    loading: true,
    weatherData: ''

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DATA:
            return { ...state, data: action.payload, loading: false };
        case REQUEST_FAILED:
            return { ...state, weatherData: action.payload, loading: false };
        case SHOW_DATA_SUCCESS:
            return { ...state, weatherData: action.payload, loading: false };
        default:
            return state;
    }
}

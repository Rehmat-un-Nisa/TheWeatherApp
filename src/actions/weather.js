import Api from '../lib/api';
import { REQUEST_FAILED, SHOW_DATA_SUCCESS } from '../actions/types'


export function getWeatherData() {
    var result;
    var items = [];
    return (dispatch) => {
        return Api.get().then(resp => {
            if (!resp.response) {
                result = resp.data.hourly_forecast;
                showDataSuccess(dispatch, JSON.stringify(result));
            } else
                dispatch({ type: REQUEST_FAILED, payload: 'Something went wrong' });
        }).catch((ex) => {
            console.log('catch', ex);
        });

    }
}

export function showDataSuccess(dispatch, data) {
    dispatch({
        type: SHOW_DATA_SUCCESS, payload: data
    });
}


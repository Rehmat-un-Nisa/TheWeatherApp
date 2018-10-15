import axios from 'axios';

class Api {
  static get() {
    return this.xhr('GET');
  }

  static xhr(verb) {
    const url = `http://api.wunderground.com/api/c18524cc7fbbc7c8/hourly/q/CA/San_Francisco.json`;

    return axios({
      method: verb,
      url: url
    }).then(function (response) {
      return response;
    }).catch(function (error) {
      return error.response
    });
  }

}
export default Api

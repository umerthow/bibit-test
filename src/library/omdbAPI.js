const axios = require('axios');
const restAPIURL = 'http://www.omdbapi.com/';

class OMDB_API {
  constructor(key) {
    const instance = axios.create({
      baseURL: restAPIURL
    });

    this.key = key;
    this.instance = instance;
  }

  _request(path) {
    const self = this;
    return new Promise(function (resolve, reject) {
      self.instance
        .get(path)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          console.log('error ', error);
          reject(error);
        });
    });
  }

  _getParamString(params) {
    Object.keys(params).forEach(
      (key) => params[key] == null && delete params[key],
    );
    var paramString = Object.keys(params)
      .map(function (key) {
        if (params[key]) {
          return key + '=' + params[key];
        }
      })
      .join('&');
     return Object.keys(params).length > 0 ? '?' + paramString : '';
  }

  /**
   * Docs: https://www.omdbapi.com/
   */

  searchMovies(movieTitle, page = 1) {
    const params = this._getParamString({
      apikey: this.key,
      s: movieTitle,
      page,
    });

    console.log('params', params)
    return this._request(params);
  }
}

module.exports = OMDB_API;

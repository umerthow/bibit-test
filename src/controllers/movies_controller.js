const response = require('../utils');
const OMDB_API = require('../library/omdbAPI');
const omdbKey = 'faf7e5bb';

const MovieController = {
  getData: async (req, res, next) => {
    try {
      const { query: params } = req
      const omdbAPi = new OMDB_API(omdbKey);
      const result = await omdbAPi.searchMovies(params.movie_name, params.page);
      if (result && result.Response !== 'False' ) {
        const { Search } = result
        return response.success(res, Search);
      }
      return response.failed(res, result.Error);
    } catch (error) {
      next(error);
    }
  },
  getDetail: async (req, res, next) => {
    try {
      const { params } = req
      const omdbAPi = new OMDB_API(omdbKey);
      const result = await omdbAPi.getDetailMovie('33e');

      if (result && result.Response !== 'False' ) {
        return response.success(res, result);
      } else {
        return response.failed(res, result.Error);
      }
      
    } catch (error) {
      next(error);
    }
  },
};

module.exports = MovieController;

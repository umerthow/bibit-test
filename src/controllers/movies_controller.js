const response = require('../utils');
const OMDB_API = require('../library/omdbAPI');
const omdbKey = 'faf7e5bb';

const MovieController = {
  getData: async (req, res, next) => {
    try {
      const { query: params } = req
      const omdbAPi = new OMDB_API(omdbKey);
      const result = await omdbAPi.searchMovies(params.movie_name, 1).then(res => res.Search);
      return response.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  getDetail: async (req, res, next) => {
    try {
      return response.success(res, null);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = MovieController;

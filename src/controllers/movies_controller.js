const response = require('../utils');
const movieService = require('../services/movie_service')
const MovieController = {
  getData: async (req, res, next) => {
    try {
      const { query } = req;
      
      if (!query.movie_name) {
        return response.failed(res, 'Please provide movie_name! eq:`batman` ');
      }

      const params = {
        movie_name: query.movie_name,
        page: query.page || 1
      }

      const data = await movieService.search(params)

      return response.success(res, data);

    } catch (error) {
      next(error);
    }
  },
  getDetail: async (req, res, next) => {
    try {
      const { params } = req;
      const result = await omdbAPi.getDetailMovie(params.id);
      if (result && result.Response !== 'False') {
        return response.success(res, result);
      }
      return response.failed(res, result.Error);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = MovieController;

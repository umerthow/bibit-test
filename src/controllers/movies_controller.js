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
      const data = await movieService.search(params.id)

      if (!params.id) {
        return response.failed(res, 'Please provide IMDb ID! eq:`tt2355709` ');
      }
      
      return response.success(res, data);
      
    } catch (error) {
      next(error);
    }
  },
};

module.exports = MovieController;

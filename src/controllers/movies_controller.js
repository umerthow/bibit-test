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

      if (data.success) {
        return response.success(res, data.data);
      } else {
        return response.failed(res, data.error);
      }
     
    } catch (error) {
      next(error);
    }
  },
  getDetail: async (req, res, next) => {
    try {
      const { params } = req;
      const data = await movieService.detailMovieById(params.id)
      if (data.success) {
        return response.success(res, data.data);
      } else {
        return response.failed(res, data.error);
      }
      
    } catch (error) {
      next(error);
    }
  },
};

module.exports = MovieController;

const response = require('../utils');
const MovieController = {
  getData: async (req, res, next) => {
    try {
      return response.success(res, null)
    } catch (error) {
      next(error);
    }
  },
  getDetail: async (req, res, next) => {
    try {
      return response.success(res, null)
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MovieController
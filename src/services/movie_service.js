const OMDB_API = require('../library/omdbAPI');
const omdbKey = 'faf7e5bb';
const omdbAPi = new OMDB_API(omdbKey);

const MovieService = {
  search: async (params) => {
    const result = await omdbAPi.searchMovies(params.movie_name, params.page);
    if (result && result.Response !== 'False') {
      const { Search: data } = result;
      return data
    } else {
     throw Error(result.Error)
    }
  },
  detailMovieById: async (id) => {
    const result = await omdbAPi.getDetailMovie(id);
    if (result && result.Response !== 'False') {
      return result
    } else {
      throw Error(result.Error)
    }
  }
}


module.exports = MovieService;

const OMDB_API = require('../library/omdbAPI');
const omdbKey = '8a6b8b7a';
const omdbAPi = new OMDB_API(omdbKey);

const MovieService = {
  search: async (params) => {
    const result = await omdbAPi.searchMovies(params.movie_name, params.page);
    return {
      success: result && result.Response !== 'False' ? true : false,
      data: result.Search || [],
      error: result.Error || null
    }
  },
  detailMovieById: async (id) => {
    const result = await omdbAPi.getDetailMovie(id);
    return {
      success: result && result.Response !== 'False' ? true : false,
      data: result,
      error: result.Error || null
    }
  }
}


module.exports = MovieService;

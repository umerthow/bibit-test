module.exports = {
  scenario01: {
    params: {
      movie_name: 'Avengers',
      page: 1,
    },
  },
  scenario02: {
    params: {
      movie_name: 'Hjdie849',
      page: 1,
    },
    result: {
      message: 'Movie not found!',
    },
  },
};

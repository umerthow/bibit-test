const { detailMovieById } = require('../../src/services/movie_service');
const { scenario01, scenario02 } = require('../scenario/detail_case');
const { expect } = require('chai');

describe('Detail movie test case', () => {
  it('Should return data detail movie', async () => {
    const result = await detailMovieById(scenario01.params.id);
    expect(result.data).to.haveOwnProperty('Title');
  });

  it('Should return same Id', async () => {
    const result = await detailMovieById(scenario01.params.id);
    expect(result.data.imdbID).to.eq(scenario01.params.id);
  });

  it('Should return error message `Incorrect IMDb ID.` ', async () => {
    const result = await detailMovieById(scenario02.params.id);
    expect(result.error).to.eq(scenario02.result.message);
  });
});

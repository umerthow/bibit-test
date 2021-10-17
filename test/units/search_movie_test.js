const { search } = require('../../src/services/movie_service');
const { scenario01, scenario02 } = require('../scenario/search_case');
const { expect } = require('chai');

describe('Search Movie test case', () => {
  let data = null;

  it('Should return data movies', async () => {
    const result = await search(scenario01.params);
    expect(result.data.length).to.gt(0);
  });

  it('Should have Title data', async () => {
    const result = await search(scenario01.params);
    data = result.data[0];
    expect(data).to.haveOwnProperty('Title');
  });

  it('Should return error message `Movie not found!` ', async () => {
    const result = await search(scenario02.params);
    expect(result.error).to.eq(scenario02.result.message);
  });
});

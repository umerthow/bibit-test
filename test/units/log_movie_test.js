const sinon = require('sinon');
const { Logs } = require('../../src/models');
const { createLog } = require('../../src/services/log_service');
const { scenario01 } = require('../scenario/log_case');
const { expect } = require('chai');

describe('Log - creation case', () => {
  it('Should return success create log', async () => {
    const mockLog = sinon.mock(Logs);
    const expectation = mockLog.expects('create');

    expectation.withArgs(scenario01.params).returns(scenario01.result);

    const log = await createLog(scenario01.params);
    expect(log).to.eq(scenario01.result);
  });
});

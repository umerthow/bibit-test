const { Logs } = require('../models/index');
const LogService = {
  createLog: async (data) => {
    const payload = {
      url: data.url,
      params: data.params,
      method: data.method,
    };

    return await Logs.create(payload);
  },
};

module.exports = LogService;

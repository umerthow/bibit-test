const LogService = require('../services/log_service');

function _getParamString(params) {
  Object.keys(params).forEach(
    (key) => params[key] == null && delete params[key],
  );
  var paramString = Object.keys(params)
    .map(function (key) {
      if (params[key]) {
        return key + '=' + params[key];
      }
    })
    .join('&');
  return Object.keys(params).length > 0 ? '?' + paramString : '';
}

const LogMiddleware = {
  requestTrack: async (req, res, next) => {
    try {
      const { path, method, query, hostname } = req;

      const queryParams = _getParamString(query);
      const payload = {
        url: hostname + path,
        params: queryParams,
        method,
      };

      LogService.createLog(payload);
      next();
    } catch (error) {
      next(error);
    }
  },
};

module.exports = LogMiddleware;

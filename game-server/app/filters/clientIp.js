var logger = require('pomelo-logger').getLogger('pomelo', __filename);
var ErrorCode = require('../consts/errorCode');
var utils = require('../util/utils');

module.exports = function(opts) {
  return new Filter(opts);
};

var Filter = function(opts) {
  opts = opts || {};

  logger.info('[ClientIpFilter] constructed.')
};

Filter.prototype.before = function(msg, session, next) {
  var sid = session.id;
  logger.info('[ClientIpFilter] invoked. clientIp: ', session.get('clientIp'));
  if (session.get('clientIp') == null) {
    var ip = session.__sessionService__.getClientAddressBySessionId(sid);
    logger.info('[clientIpFilter] set clientIp => %s', ip);
    session.set('clientIp', ip);
    session.push('clientIp', function() {
      next();
    });
    return;
  }

  next();
};


var format = require('util').format;
var logger = require('pomelo-logger').getLogger(__filename);
var GameTable = require('../../../domain/gameTable');

module.exports = function(app) {
  return new Handler(app);
};

var Handler = function(app) {
  logger.info("connector.Handler created.");
  this.app = app;
};

Handler.prototype.ready = function(msg, session, next) {
  var room_id = session.get('room_id');
  var uid = session.uid;
  var sid = session.frontendId;

  this.app.rpc.area.gameRemote.readyGame(session, {uid: uid, serverId: sid, room_id: room_id}, function() {
     next(null, null);
  });
};

Handler.prototype.grabLord = function(msg, session, next) {
  var room_id = session.get('room_id');
  var uid = session.uid;
  var sid = session.frontendId;
  var table_id = session.get('table_id');
  var lordValue = msg.lordValue;

  var params = {
    uid: uid,
    serverId: sid,
    room_id: room_id,
    table_id: table_id,
    lordValue: lordValue
  };

  this.app.rpc.area.gameRemote.grabLord(session, params, function() {
    next(null, null);
  });

};
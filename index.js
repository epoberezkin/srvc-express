var express = require('express')
	, app = express()
	, server = require('http').createServer(app)
	, RedisStore = require('connect-redis')(express)
	, lessMiddleware = require('less-middleware');

module.exports = {
  	express: express
  ,	app: app
  ,	server: server
  ,	RedisStore: RedisStore
};

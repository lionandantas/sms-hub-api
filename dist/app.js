"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv/config');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
require('express-async-errors');
var _routers = require('./routers'); var _routers2 = _interopRequireDefault(_routers);

var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
require('./database');
var _youch = require('youch'); var _youch2 = _interopRequireDefault(_youch);

class App {
  constructor() {
    this.server = _express2.default.call(void 0, );
    this.middlewares();
    this.routers();
    this.execptionHandler();
  }

  middlewares() {
    //this.server.use('/files', express.static(path.resolve(__dirname, '..', 'temp', 'uploads')));
    this.server.use(_express2.default.json());
    this.server.use(_cors2.default.call(void 0, ));
    this.server.use(_bodyparser2.default.urlencoded({ extended: true }));
    this.server.use(function(req, res, next) {
      console.log("%s %s", req.method, req.url);
      next();
    });
  }

  routers() {
    this.server.use("/api", _routers2.default);
  }

  execptionHandler() {
    this.server.use(async (err, req, res, next) => {
     // if (process.env.NODE_ENV == "development") {
        const erros = await new (0, _youch2.default)(err, req).toJSON();
        console.log(`${JSON.stringify(erros)}`);
        return res.status(500).json(erros);
      //}
      //return res.status(500).json({ error: erros });
    });
  }
}

exports. default = new App().server;

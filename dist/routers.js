"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _RouterController = require('./app/controllers/RouterController'); var _RouterController2 = _interopRequireDefault(_RouterController);
var _InitDataController = require('./app/controllers/InitDataController'); var _InitDataController2 = _interopRequireDefault(_InitDataController);
var _OccupationController = require('./app/controllers/OccupationController'); var _OccupationController2 = _interopRequireDefault(_OccupationController);
var _NationalityController = require('./app/controllers/NationalityController'); var _NationalityController2 = _interopRequireDefault(_NationalityController);
var _GenderController = require('./app/controllers/GenderController'); var _GenderController2 = _interopRequireDefault(_GenderController);
var _SkinController = require('./app/controllers/SkinController'); var _SkinController2 = _interopRequireDefault(_SkinController);
var _AddressController = require('./app/controllers/AddressController'); var _AddressController2 = _interopRequireDefault(_AddressController);
var _PrognosticController = require('./app/controllers/PrognosticController'); var _PrognosticController2 = _interopRequireDefault(_PrognosticController);
var _auth = require('./app//middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);
var _RedeRelacionamentoController = require('./app/controllers/RedeRelacionamentoController'); var _RedeRelacionamentoController2 = _interopRequireDefault(_RedeRelacionamentoController);


const routers = new (0, _express.Router)();

routers.post('/users', _UserController2.default.create);
routers.put('/users/personalinformation',_auth2.default, _UserController2.default.updatePersonalInformation);
routers.get('/users/personalinformation',_auth2.default, _UserController2.default.detailPersonalInformation);
routers.post('/users/calculateRisk',_auth2.default, _UserController2.default.calculateRisk);
routers.post('/router',_auth2.default, _RouterController2.default.create);
routers.get('/router/routebyuser/:id', _RouterController2.default.getRouteByUser);
routers.get("/occupation",_auth2.default, _OccupationController2.default.search);
routers.get("/nationality",_auth2.default, _NationalityController2.default.search);
routers.get("/gender",_auth2.default, _GenderController2.default.search);
routers.get("/skin",_auth2.default, _SkinController2.default.search);
routers.get("/address/cep/:cep",_auth2.default, _AddressController2.default.cep);
routers.delete("/address/:id",_auth2.default, _AddressController2.default.remove);
routers.post("/address",_auth2.default, _AddressController2.default.create);
routers.get("/address",_auth2.default, _AddressController2.default.search);
routers.get("/prognostic/list",_auth2.default, _PrognosticController2.default.list);
routers.post("/prognostic",_auth2.default, _PrognosticController2.default.create);
routers.get("/prognostic",_auth2.default, _PrognosticController2.default.search);
routers.get("/prognostic/:id",_auth2.default, _PrognosticController2.default.detail);
routers.post("/prognostic/imhealthy",_auth2.default, _PrognosticController2.default.imhealthy);

routers.post('/rede-relacionamento', _auth2.default, _RedeRelacionamentoController2.default.create);
routers.get('/rede-relacionamento/getByUser', _auth2.default, _RedeRelacionamentoController2.default.getByUser);
routers.get('/rede-relacionamento/getByType/:tipo', _auth2.default, _RedeRelacionamentoController2.default.getByType);
routers.delete('/rede-relacionamento/:id', _auth2.default, _RedeRelacionamentoController2.default.delete);



routers.post('/init/gender',_auth2.default, _InitDataController2.default.listGender);
routers.post('/init/nationality',_auth2.default, _InitDataController2.default.listNationality);
routers.post('/init/ocupation',_auth2.default, _InitDataController2.default.listOcupation);
routers.post('/init/skin',_auth2.default, _InitDataController2.default.listSkin);
routers.get('/router/heatmap', _RouterController2.default.heatmaps);

exports. default = routers;
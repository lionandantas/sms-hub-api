"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);
var _Route = require('../schemas/Route'); var _Route2 = _interopRequireDefault(_Route);
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _datefns = require('date-fns');
var _moment = require('moment'); var _moment2 = _interopRequireDefault(_moment);
var _CalculateRiskMethods = require('../../lib/CalculateRiskMethods'); var _CalculateRiskMethods2 = _interopRequireDefault(_CalculateRiskMethods);

class UserController {
  async create(req, res) {
    console.log(`AQUI ${JSON.stringify(req.body)}`);
    const { id, name, email, playerId, imagem, origin, device } = req.body;
    console.log(`PLAYERYD ${playerId}`);
    const userExist = await _User2.default.findOne({
      email: email,
    });

    if (!userExist) {
      var userCreated = await _User2.default.create({
        code: id,
        origin: origin,
        name: name,
        email: email,
        playerId: playerId,
        imagem: imagem,
        device: device,
      });

      return res.status(200).json({
        user: {
          id,
          name,
          email,
          imagem,
        },
        token: _jsonwebtoken2.default.sign({ id: userCreated._id }, _auth2.default.secret, {
          expiresIn: _auth2.default.expiresIn,
        }),
      });
    } else {
      await userExist.update({
        playerId: playerId,
        device: device,
      });
      return res.status(200).json({
        user: {
          id,
          name,
          email,
          imagem,
        },
        token: _jsonwebtoken2.default.sign({ id: userExist._id }, _auth2.default.secret, {
          expiresIn: _auth2.default.expiresIn,
        }),
      });
    }
  }

  async updatePersonalInformation(req, res) {
    const {
      occupation,
      name,
      dateOfBirth,
      gender,
      skin,
      cpf,
      phone,
      nationality,
    } = req.body;
    const user = await _User2.default.findOne({
      _id: req.userId,
    });

    var punctuation = 0;
    if (dateOfBirth != null) {
      const dateFormat = new Date(
        _moment2.default.call(void 0, dateOfBirth, "DD/MM/YYYY", true).format("YYYY-MM-DD")
      );
      const years = _datefns.differenceInYears.call(void 0, new Date(), dateFormat);
      punctuation = _CalculateRiskMethods2.default.calculateRiskAge(years);
    }
    
    await user.update({
      occupation: occupation,
      name: name,
      dateOfBirth: dateOfBirth,
      gender: gender,
      skin: skin,
      cpf: cpf,
      phone: phone,
      nationality: nationality,
      punctuation: punctuation,
    });
    return res.status(200).json(user);
  }

  async detailPersonalInformation(req, res) {
    const user = await _User2.default.findOne({
      _id: req.userId,
    });
    return res.status(200).json(user);
  }

  async calculateRisk(req, res) {
    const user = await _User2.default.findOne({
      _id: req.userId,
    });

    if (user.dateOfBirth != null) {
      const dateFormat = new Date(
        _moment2.default.call(void 0, user.dateOfBirth, "DD/MM/YYYY", true).format("YYYY-MM-DD")
      );
      const years = _datefns.differenceInYears.call(void 0, new Date(), dateFormat);
      await user.update({
        punctuation: _CalculateRiskMethods2.default.calculateRiskAge(years),
      });
    }
    return res.status(200).json();
  }
}

exports. default = new UserController();

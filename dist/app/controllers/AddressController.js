"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _nodecorreios = require('node-correios'); var _nodecorreios2 = _interopRequireDefault(_nodecorreios);
var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Address = require('../schemas/Address'); var _Address2 = _interopRequireDefault(_Address);
var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);

class AddressController {
  async cep(req, res) {
    const schema = Yup.object().shape({
      cep: Yup.string().required().min(8),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: "Validation fails." });
    }

    const correios = new (0, _nodecorreios2.default)();

    correios
      .consultaCEP({ cep: req.params.cep })
      .then((rows) => {
        if (rows.bairro == "" && rows.logradouro == "") {
          rows.bairro = rows.localidade;
          rows.logradouro = rows.localidade;
          res.status(201).json(rows);
        } else {
          res.status(201).json(rows);
        }
      })
      .catch((err) =>
        res.status(400).json({
          error: "Cep não encontrado",
        })
      );
  }
  async create(req, res) {
    const schema = Yup.object().shape({
      latitude: Yup.string().required(),
      longitude: Yup.string().required(),
      cep: Yup.string().required(),
      logradouro: Yup.string().required(),
      bairro: Yup.string().required(),
      localidade: Yup.string().required(),
      uf: Yup.string().required(),
      numero: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: "A requisição possui campos inválidos." });
    }
    const {
      latitude,
      longitude,
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf,
      numero,
      tipoResidencia,
    } = req.body;

    const user = await _User2.default.findOne({
      _id: req.userId,
    });

    if (!user) {
      return res.status(400).json({ error: "Usuário não localizado." });
    }
    var address = await _Address2.default.create({
      postalCode: cep,
      numberResidence: numero,
      adminArea: uf,
      locality: localidade,
      complement: complemento,
      thoroughfare: logradouro,
      district: bairro,
      latitude: latitude,
      longitude: longitude,
      residenceType: tipoResidencia,
      user: req.userId,
    });

    user.adresses.push(address);
    await user.save();

    return res.status(200).json(address);
  }

  async remove(req, res) {
    const { id } = req.params;

    const address = await _Address2.default.find({
      _id: id,
    });
    if (address) {
      const address = await _Address2.default.deleteOne({
        _id: id,
      });
    }
    return res.status(200).json({});
  }

  async search(req, res) {
    console.log(`ID USUARIO ${req.userId}`);

    const address = await _Address2.default.find({
      user: req.userId,
    });

    console.log(`DATA ${JSON.stringify(address)}`);
    return res.status(200).json(address);
  }
}

exports. default = new AddressController();

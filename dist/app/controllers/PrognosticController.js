"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Monitoring = require('../schemas/Monitoring'); var _Monitoring2 = _interopRequireDefault(_Monitoring);
var _HealthInformation = require('../schemas/HealthInformation'); var _HealthInformation2 = _interopRequireDefault(_HealthInformation);
var _Prognostic = require('../schemas/Prognostic'); var _Prognostic2 = _interopRequireDefault(_Prognostic);
var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);

class PrognosticController {
  async list(req, res) {
    var list = [];

    list.push({
      reference: "AR01/A02",
      name: "Desconforto respiratório e/ou falta de ar",
      checked: false,
      weight:2
    });
    list.push({ reference: "L12", name: "Dedos roxos", checked: false, weight:3 });
    list.push({ reference: "A04", name: "Cansaço exessivo", checked: false, weight:3 });
    list.push({ reference: "N16", name: "Olfato paladar", checked: false, weight:1.5 });
    list.push({ reference: "R05", name: "Tosse", checked: false, weight:3 });
    list.push({ reference: "D11", name: "Diarréia", checked: false , weight:0.5});
    list.push({ reference: "A01", name: "Dores no corpo", checked: false, weight:1 });
    list.push({ reference: "R21", name: "Dor de garganta", checked: false, weight:0.5 });
    list.push({ reference: "N01", name: "Dor de cabeça", checked: false, weight:0.5 });
    list.push({ reference: "A02", name: "Calafrios", checked: false, weight:0.5 });
    list.push({ reference: "D10", name: "Vomitos", checked: false, weight:1 });
    list.push({
      reference: "D01/D02",
      name: "Dores abdominais",
      checked: false,
    });
    return res.status(200).json(list);
  }

  async create(req, res) {
    console.log(`CHAMOu`);

    const { id, diagnosticDescription, contactWithInfectedPerson } = req.body;

    if (id != null) {
      console.log(`ATUALIZANDO`);

      const monitoring = await _Monitoring2.default.findOne({
        _id: id,
      });

      if (monitoring.healthy) {
        return res
          .status(400)
          .json({
            error: "Você já se recuperou nesse monitoramento, criei outro",
          });
      }
      const healthInformation = await _HealthInformation2.default.create({
        monitoring: monitoring._id,
      });

      monitoring.healthInformations.push(healthInformation);

      await monitoring.save();

      const objects = req.body.symptoms.map((element) => {
        const prognostic = new (0, _Prognostic2.default)();
        prognostic.name = element.name;
        prognostic.reference = element.reference;
        prognostic.temperature = element.temperature;
        prognostic.day = element.day;
        prognostic.saturation = element.saturation;
        prognostic.weight = element.weight;
        prognostic.healthInformation = healthInformation._id;
        return prognostic;
      });

      try {
        const docs = await Promise.all(
          objects.map((x) => {
            x.save();
            healthInformation.prognostics.push(x);
          })
        );
      } catch (e) {
        console.log(`ERRRO ${JSON.stringify(e)}`);
      }
      healthInformation.save();

      return res.status(200).json({
        ok: true,
      });
    } else {
      const user = await _User2.default.findOne({
        _id: req.userId,
      });
      const monitoringExiste = await _Monitoring2.default.findOne({
        user: req.userId,
        healthy: false,
      });
      console.log(`EXISTE ALGO ${JSON.stringify(monitoringExiste)}`);
      if (monitoringExiste != null) {
        return res
          .status(400)
          .json({ error: "Você já possui um monitoramento em aberto." });
      }
      req.body.symptoms.forEach((element) => {});

      const monitoring = await _Monitoring2.default.create({
        diagnosticDescription: diagnosticDescription,
        contactWithInfectedPerson: contactWithInfectedPerson,
        user: req.userId,
      });

      user.monitoring.push(monitoring);
      await user.save();
      const healthInformation = await _HealthInformation2.default.create({
        monitoring: monitoring._id,
      });

      monitoring.healthInformations.push(healthInformation);

      await monitoring.save();

      const objects = req.body.symptoms.map((element) => {
        const prognostic = new (0, _Prognostic2.default)();
        prognostic.name = element.name;
        prognostic.reference = element.reference;
        prognostic.temperature = element.temperature;
        prognostic.day = element.day;
        prognostic.saturation = element.saturation;
        prognostic.weight = element.weight;
        prognostic.healthInformation = healthInformation._id;
        return prognostic;
      });

      try {
        const docs = await Promise.all(
          objects.map((x) => {
            x.save();
            healthInformation.prognostics.push(x);
          })
        );
      } catch (e) {
        console.log(`ERRRO ${JSON.stringify(e)}`);
      }
      healthInformation.save();
      return res.status(200).json({
        ok: true,
      });
    }
  }

  async search(req, res) {
    const monitoring = await _Monitoring2.default.find({
      user: req.userId,
    }).populate({
      path: "healthInformations",
      populate: {
        path: "prognostics",
        model: "Prognostic",
      },
    });

    return res.status(200).json(monitoring);
  }

  async detail(req, res) {
    const { id } = req.params;
    const monitoring = await _Monitoring2.default.findOne({
      _id: id,
    }).populate({
      path: "healthInformations",
      populate: {
        path: "prognostics",
        model: "Prognostic",
      },
    });

    return res.status(200).json(monitoring);
  }
  async imhealthy(req, res) {
    const { id } = req.body;
    const monitoring = await _Monitoring2.default.update({_id: id},{
      $set:{
        "healthy": true
      }
    });
    return res.status(200).json(monitoring);
  }
}

exports. default = new PrognosticController();

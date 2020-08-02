"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);
var _Route = require('../schemas/Route'); var _Route2 = _interopRequireDefault(_Route);
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class RouterController {
  async create(req, res) {
    //console.log(`AQUI ${JSON.stringify(req.body)}`);
    const {
      latitude,
      longitude,
      speed,
      accuracy,
      addressLine,
      adminArea,
      countryCode,
      countryName,
      featureName,
      locality,
      postalCode,
      subLocality,
      subThoroughfare,
      thoroughfare,
    } = req.body;
    //console.log(`ID USUARIO ${JSON.stringify(req.userId)}`);
    const user = await _User2.default.findOne({
      _id: req.userId,
    });
    //console.log(`USUARIO ${JSON.stringify(user)}`);
    const route = await _Route2.default.create({
      latitude: latitude,
      longitude: longitude,
      speed: speed,
      accuracy: accuracy,
      user: user._id,
      addressLine: addressLine,
      adminArea: adminArea,
      countryCode: countryCode,
      countryName: countryName,
      featureNam: featureName,
      locality: locality,
      postalCode: postalCode,
      subLocality: subLocality,
      subThoroughfare: subThoroughfare,
      thoroughfare: thoroughfare,
      location: {
        type: "Point",
        coordinates: [latitude, longitude],
      },
    });

    user.routes.push(route);
    await user.save();

    return res.status(200).json(route);
  }

  async getRouteByUser(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res
        .status(400)
        .json({ error: "A requisição possui campos inválidos." });
    }
    const { id } = req.params;

    const routers = await _Route2.default.find({
      user: id,
    });

    return res.status(200).json(routers);
  }

  async heatmaps(req, res) {
   const { latitude, longitude } = req.query;
   
   const long = Number(longitude);
   
   const latt = Number(latitude)

    const routes = await _Route2.default.aggregate([
      {
        $geoNear: {
          near: { type: "Point", coordinates: [latt,long] },
          spherical: true,
          distanceField: "distance",
          maxDistance: 4000,
        },
      },
      {
        $group: { _id: "$user", doc: { $first: "$$ROOT" } },
      },
      { $replaceRoot: { newRoot: "$doc" } },
    ]);

    return res.status(200).json(routes);
  }
}

exports. default = new RouterController();

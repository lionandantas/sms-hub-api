"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Skin = require('../schemas/Skin'); var _Skin2 = _interopRequireDefault(_Skin);

class SkinController {
  async search(req, res) {
    var skin = await _Skin2.default.find().sort( { name: 1} );

    return res.status(200).json(skin);
  }
}

exports. default = new SkinController();
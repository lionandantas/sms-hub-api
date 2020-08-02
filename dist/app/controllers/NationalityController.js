"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Nationality = require('../schemas/Nationality'); var _Nationality2 = _interopRequireDefault(_Nationality);

class NationalityController {
  async search(req, res) {


    const {keyword } = req.query;
    var query = {};
    if (keyword !== undefined) {
        query = {
            name: new RegExp(keyword, 'i')
        };
    }
    console.log(`CONSULTOU ${keyword}`);
    //var nationality = await Nationality.find(query).sort( { name: 1} );
    //console.log(`DATA ${JSON.stringify(nationality)}`);
    var nationality = await _Nationality2.default.find().sort( { name: 1} );
    return res.status(200).json(nationality);
  }
}

exports. default = new NationalityController();
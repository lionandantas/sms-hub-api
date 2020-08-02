"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var SchemaTypes = _mongoose2.default.Schema.Types;
const NationalitySchema = new _mongoose2.default.Schema(
  {
    name: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose2.default.model("Nationality", NationalitySchema);

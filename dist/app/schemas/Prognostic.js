"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var SchemaTypes = _mongoose2.default.Schema.Types;
const PrognosticSchema = new _mongoose2.default.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    reference: {
      type: String,
      required: false,
    },
    temperature: {
      type: Number,
      required: false,
    },
    day: {
      type: Number,
      required: false,
    },
    saturation: {
      type: Number,
      required: false,
    },
    weight: {
      type: Number,
      required: false,
    },
    healthInformation: {
      type: _mongoose2.default.Schema.Types.ObjectId,
      ref: "HealthInformation",
      required: true
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose2.default.model("Prognostic", PrognosticSchema);

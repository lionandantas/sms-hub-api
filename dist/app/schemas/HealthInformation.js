"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var SchemaTypes = _mongoose2.default.Schema.Types;
const HealthInformationSchema = new _mongoose2.default.Schema(
  {
    prognostics: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: "Prognostic" }],
    monitoring: {
      type: _mongoose2.default.Schema.Types.ObjectId,
      ref: "Monitoring",
    },
  },
  
  {
    timestamps: true,
  }
);

exports. default = _mongoose2.default.model("HealthInformation", HealthInformationSchema);

"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _yup = require('yup');
var SchemaTypes = _mongoose2.default.Schema.Types;
const MonitoringSchema = new _mongoose2.default.Schema(
  {
    user: {
      type: _mongoose2.default.Schema.Types.ObjectId,
      ref: "User",
    },
    diagnosticDescription: {
      type: String,
      required: false,
    },
    healthy: {
      type: Boolean,
      required: false,
      default:false
    },
    contactWithInfectedPerson: {
      type: Boolean,
      required: false,
    },
    healthInformations: [
      { type: _mongoose2.default.Schema.Types.ObjectId, ref: "HealthInformation" },
    ],
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose2.default.model("Monitoring", MonitoringSchema);

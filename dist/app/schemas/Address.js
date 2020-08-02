"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var SchemaTypes = _mongoose2.default.Schema.Types;
const AddressSchema = new _mongoose2.default.Schema(
  {
    postalCode: {
      type: String,
      required: false,
    },
    numberResidence: {
      type: String,
      required: false,
    },
    adminArea: {
      type: String,
      required: false,
    },
    locality: {
      type: String,
      required: false,
    },
    complement: {
      type: String,
      required: false,
    },
    district: {
      type: String,
      required: false,
    },
    thoroughfare: {
      type: String,
      required: false,
    },
    latitude: {
      type: Number,
      required: false,
    },
    longitude: {
      type: Number,
      required: false,
    },
    residenceType: {
      type: String,
      required: false,
    },
    user: {
      type: _mongoose2.default.Schema.Types.ObjectId,
      ref: "Address",
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose2.default.model("Address", AddressSchema);

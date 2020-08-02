"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var SchemaTypes = _mongoose2.default.Schema.Types;
const RouteSchema = new _mongoose2.default.Schema(
  {
    latitude: {
      type: Number,
      required: false
    },
    longitude: {
      type: Number,
      required: false
    },
    location: {
      type: { type: String },
      coordinates: []
     },
    bearing: {
      type: Number,
      required: false
    },
    speed: {
      type:Number,
      required: false
    },
    accuracy: {
      type: Number,
      required: false
    },
    addressLine: {
      type: String,
      required: false
    },
    adminArea: {
      type: String,
      required: false
    },
    countryCode: {
      type: String,
      required: false
    },
    countryName: {
      type: String,
      required: false
    },
    featureName: {
      type: String,
      required: false
    },
    locality: {
      type: String,
      required: false
    },
    postalCode: {
      type: String,
      required: false
    },
    subLocality: {
      type: String,
      required: false
    },
    subThoroughfare: {
      type: String,
      required: false
    },
    thoroughfare: {
      type: String,
      required: false
    },
    user :{
      type:_mongoose2.default.Schema.Types.ObjectId,
      ref:'User'
    }
  },
  {
    timestamps: true
  }
);
RouteSchema.index({ location: "2dsphere" });
exports. default = _mongoose2.default.model("Route", RouteSchema);

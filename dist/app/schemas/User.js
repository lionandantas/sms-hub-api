"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const UserSchema = new _mongoose2.default.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    origin: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    imagem: {
      type: String,
      required: false,
    },
    token: {
      type: String,
      required: false,
    },
    code: {
      type: String,
      required: false,
    },
    playerId: {
      type: String,
      required: false,
    },
    device: {
      type: String,
      required: false,
    },
    occupation: {
      type: String,
      required: false,
    },
    occupation: {
      type: String,
      required: false,
    },
    dateOfBirth: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    skin: {
      type: String,
      required: false,
    },
    cpf: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    nationality: {
      type: String,
      required: false,
    },
    punctuation:{
      type: Number,
      required: false,
    },
    risk:{
      type: Number,
      required: false,
      default:0
    },
    routes: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: "Route" }],
    adresses: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: "Address" }],
    monitoring: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: "Monitoring" }],
    prognostics: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: "Prognostic" }],
    redeRelacionamento: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: "RedeRelacionamento" }],

    
    /* user: {
        type: Number,
        required: true,
    },
    read: {
        type: Boolean,
        required: true,
        default: false,
    }*/
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose2.default.model("User", UserSchema);

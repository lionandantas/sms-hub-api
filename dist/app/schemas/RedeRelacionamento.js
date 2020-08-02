"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var SchemaTypes = _mongoose2.default.Schema.Types;
const RedeRelacionamentoSchemea = new _mongoose2.default.Schema(
    {
        user: {
            type: _mongoose2.default.Schema.Types.ObjectId,
            ref: "User",
        },
        nome: {
            type: String,
            required: false,
        },
        cpf: {
            type: String,
            required: false,
        },
        dataNascimento: {
            type: String,
            required: false,
        },
        idade: {
            type: String,
            required: false,
        },
        genero: {
            type: String,
            required: false,
        },
        grupo: {
            type: String,
            required: false,
        },
        imagem: {
            type: String,
            required: false,
        },
        tipo: {
            type: String,
            required: false,
        },
        cadastroManual: {
            type: Boolean,
            required: false,
        },
        cratedAt: {
            type: String,
            required: false,
        }
    }
);

exports. default = _mongoose2.default.model("RedeRelacionamento", RedeRelacionamentoSchemea);
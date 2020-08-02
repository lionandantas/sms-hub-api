"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);
var _RedeRelacionamento = require('../schemas/RedeRelacionamento'); var _RedeRelacionamento2 = _interopRequireDefault(_RedeRelacionamento);

class RedeRelacionamentoController {
    async create(req, res) {
        const {
            id,
            nome,
            cpf,
            dataNascimento,
            idade,
            genero,
            grupo,
            tipo,
            cadastroManual
        } = req.body;

        console.log(req.body);

        const network = await _RedeRelacionamento2.default.create({
            id: id,
            user: req.userId,
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            idade: idade,
            genero: genero,
            grupo: grupo,
            tipo: tipo,
            cadastroManual: cadastroManual
        });

        const user = await _User2.default.findOne({
            _id: req.userId,
        });

        user.redeRelacionamento.push(network);
        await user.save();

        return res.status(200).json(network);
    }

    async delete(req, res) {
        const { id } = req.params;

        console.log(id);

        const rede = await _RedeRelacionamento2.default.find({
            _id: id
        });

        if(rede) {
            const rede = await _RedeRelacionamento2.default.deleteOne({
                _id: id
            });
        }

        return res.status(200).json({});
    }

    async getByUser(req, res) {

        const redeRelacionamento = await _RedeRelacionamento2.default.find({
            user: req.userId,
        });

        console.log(redeRelacionamento);

        return res.status(200).json(redeRelacionamento);
    }

    async getByType(req, res) {
        const schema = Yup.object().shape({
            tipo: Yup.string().required(),
        });
        
        if (!(await schema.isValid(req.params))) {
            return res
                .status(400)
                .json({ error: "A requisição possui campos inválidos." });
        }
        
        const { tipo } = req.params;

        const redeRelacionamento = await _RedeRelacionamento2.default.find({
            tipo: tipo
        });

        return res.status(200).json(redeRelacionamento);
    }
}

exports. default = new RedeRelacionamentoController();
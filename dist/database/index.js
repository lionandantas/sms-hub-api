"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//import databaseConfig from '../config/database';
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _Occupation = require('../app/schemas/Occupation'); var _Occupation2 = _interopRequireDefault(_Occupation);
var _Nationality = require('../app/schemas/Nationality'); var _Nationality2 = _interopRequireDefault(_Nationality);
var _Gender = require('../app/schemas/Gender'); var _Gender2 = _interopRequireDefault(_Gender);


class Database {

    constructor() {
        this.init();
        this.mongo();
    }
    init() {
       
    }
    mongo() {
        this.mongoConnection = _mongoose2.default.connect('mongodb+srv://iholpway:iholpway@cluster0-cm8zm.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
    }

    
}

exports. default = new Database();

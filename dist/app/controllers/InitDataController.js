"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Occupation = require('../schemas/Occupation'); var _Occupation2 = _interopRequireDefault(_Occupation);
var _Nationality = require('../schemas/Nationality'); var _Nationality2 = _interopRequireDefault(_Nationality);
var _Gender = require('../schemas/Gender'); var _Gender2 = _interopRequireDefault(_Gender);
var _Skin = require('../schemas/Skin'); var _Skin2 = _interopRequireDefault(_Skin);

class InitDataController {
  /*constructor(){
   this.listOcupation();
   this.listNationality();
   this.listGender();
   this.listSkin();
}*/

  async create(req, res) {
    return res.status(200).json(true);
  }

  async listOcupation(req, res) {
    console.log(`INICIANDO`);
    var list = [];
    list.push({ nome: "Administrador                         " });
    list.push({ nome: "Administrador público                 " });
    list.push({ nome: "Agropecuarista                        " });
    list.push({ nome: "Contabilista                          " });
    list.push({ nome: "Economista                            " });
    list.push({ nome: "Especialista em comércio exterior     " });
    list.push({ nome: "Chef                                  " });
    list.push({ nome: "Gerente comercial                     " });
    list.push({ nome: "Gestor de recursos humanos            " });
    list.push({ nome: "Gestor de turismo                     " });
    list.push({ nome: "Gestor público                        " });
    list.push({ nome: "Hoteleiro                             " });
    list.push({ nome: "Piloto de avião                       " });
    list.push({ nome: "Turismólogo                           " });
    list.push({ nome: "Animador                              " });
    list.push({ nome: "Arquiteto                             " });
    list.push({ nome: "Artista plástico                      " });
    list.push({ nome: "Ator                                  " });
    list.push({ nome: "Dançarino                             " });
    list.push({ nome: "Designer                              " });
    list.push({ nome: "Designer de games                     " });
    list.push({ nome: "Designer de interiores                " });
    list.push({ nome: "Designer de moda                      " });
    list.push({ nome: "Fotógrafo                             " });
    list.push({ nome: "Historiador da arte                   " });
    list.push({ nome: "Músico                                " });
    list.push({ nome: "Produtor cênico                       " });
    list.push({ nome: "Produtor fonográfico                  " });
    list.push({ nome: "Agrônomo                              " });
    list.push({ nome: "Bioquímico                            " });
    list.push({ nome: "Biotecnólogo                          " });
    list.push({ nome: "Ecologista                            " });
    list.push({ nome: "Geofísico                             " });
    list.push({ nome: "Geólogo                               " });
    list.push({ nome: "Gestor ambiental                      " });
    list.push({ nome: "Veterinário                           " });
    list.push({ nome: "Meteorologista                        " });
    list.push({ nome: "Oceanógrafo                           " });
    list.push({ nome: "Zootecnólogo                          " });
    list.push({ nome: "Analista e desenvolvedor de sistemas  " });
    list.push({ nome: "Astrônomo                             " });
    list.push({ nome: "Cientista da computação               " });
    list.push({ nome: "Estatístico                           " });
    list.push({ nome: "Físico                                " });
    list.push({ nome: "Gestor da tecnologia da informação    " });
    list.push({ nome: "Matemático                            " });
    list.push({ nome: "Nanotecnólogo                         " });
    list.push({ nome: "Químico                               " });
    list.push({ nome: "Advogado                              " });
    list.push({ nome: "Arqueólogo                            " });
    list.push({ nome: "Cooperativista                        " });
    list.push({ nome: "Filósofo                              " });
    list.push({ nome: "Geógrafo                              " });
    list.push({ nome: "Historiador                           " });
    list.push({ nome: "Linguista                             " });
    list.push({ nome: "Museologista                          " });
    list.push({ nome: "Pedagogo                              " });
    list.push({ nome: "Professor                             " });
    list.push({ nome: "Psicopedagogo                         " });
    list.push({ nome: "Relações internacionais               " });
    list.push({ nome: "Sociólogo                             " });
    list.push({ nome: "Teólogo                               " });
    list.push({ nome: "Tradutor e intérprete                 " });
    list.push({ nome: "Arquivologista                        " });
    list.push({ nome: "Biblioteconomista                     " });
    list.push({ nome: "Educomunicador                        " });
    list.push({ nome: "Jornalista                            " });
    list.push({ nome: "Produtor audiovisual                  " });
    list.push({ nome: "Produtor cultural                     " });
    list.push({ nome: "Produtor editorial                    " });
    list.push({ nome: "Produtor multimídia                   " });
    list.push({ nome: "Produtor publicitário                 " });
    list.push({ nome: "Publicitário                          " });
    list.push({ nome: "Radialista                            " });
    list.push({ nome: "Relações públicas                     " });
    list.push({ nome: "Secretária                            " });
    list.push({ nome: "Secretária executiva                  " });
    list.push({ nome: "Agricultor                            " });
    list.push({ nome: "Construtor civil                      " });
    list.push({ nome: "Construtor naval                      " });
    list.push({ nome: "Engenheiro acústico                   " });
    list.push({ nome: "Engenheiro aeronáutico                " });
    list.push({ nome: "Engenheiro agrícola                   " });
    list.push({ nome: "Engenheiro ambiental e sanitário      " });
    list.push({ nome: "Engenheiro biomédico                  " });
    list.push({ nome: "Engenheiro civil                      " });
    list.push({ nome: "Engenheiro da computação              " });
    list.push({ nome: "Engenheiro de alimentos               " });
    list.push({ nome: "Engenheiro de biossistemas            " });
    list.push({ nome: "Engenheiro de controle e automação    " });
    list.push({ nome: "Engenheiro de energia                 " });
    list.push({ nome: "Engenheiro de inovação                " });
    list.push({ nome: "Engenheiro de materiais               " });
    list.push({ nome: "Engenheiro de minas                   " });
    list.push({ nome: "Engenheiro de pesca                   " });
    list.push({ nome: "Engenheiro de petróleo                " });
    list.push({ nome: "Engenheiro de produção                " });
    list.push({ nome: "Engenheiro de segurança do trabalho   " });
    list.push({ nome: "Engenheiro de sistemas                " });
    list.push({ nome: "Engenheiro de software                " });
    list.push({ nome: "Engenheiro de telecomunicações        " });
    list.push({ nome: "Engenheiro de transporte e mobilidade " });
    list.push({ nome: "Engenheiro elétrico                   " });
    list.push({ nome: "Engenheiro eletrônico                 " });
    list.push({ nome: "Engenheiro físico                     " });
    list.push({ nome: "Engenheiro florestal                  " });
    list.push({ nome: "Engenheiro hídrico                    " });
    list.push({ nome: "Engenheiro mecânico                   " });
    list.push({ nome: "Engenheiro mecatrônico                " });
    list.push({ nome: "Engenheiro naval                      " });
    list.push({ nome: "Engenheiro químico                    " });
    list.push({ nome: "Gestor da qualidade                   " });
    list.push({ nome: "Minerador                             " });
    list.push({ nome: "Silvicultor                           " });
    list.push({ nome: "Biomédico                             " });
    list.push({ nome: "Dentista                              " });
    list.push({ nome: "Educador físico                       " });
    list.push({ nome: "Enfermeiro                            " });
    list.push({ nome: "Esteticista                           " });
    list.push({ nome: "Farmacêutico                          " });
    list.push({ nome: "Fisioterapeuta                        " });
    list.push({ nome: "Fonoaudiólogo                         " });
    list.push({ nome: "Gerontólogo                           " });
    list.push({ nome: "Gestor em saúde                       " });
    list.push({ nome: "Gestor hospitalar                     " });
    list.push({ nome: "Médico                                " });
    list.push({ nome: "Musicoterapeuta                       " });
    list.push({ nome: "Nutricionista                         " });
    list.push({ nome: "Psicólogo                             " });
    list.push({ nome: "Radiologista                          " });
    list.push({ nome: "Terapeuta ocupacional                 " });

    list.forEach(async (element) => {
      var ocupation = await _Occupation2.default.findOne({ name: element.nome.trim() });
      console.log(`AS ${JSON.stringify(ocupation)}`);
      if (!ocupation) {
        var inserted = await _Occupation2.default.create({
          name: element.nome.trim(),
        });
        console.log(`inserted ${JSON.stringify(inserted)}`);
      }
    });

    return res.status(200).json(true);
  }

  async listNationality(req, res) {
    var list = [];
    list.push({ name: "Antígua e Barbuda - Antiguano                      " });
    list.push({ name: "Argentina - Argentino                              " });
    list.push({ name: "Bahamas - Bahamense                                " });
    list.push({ name: "Barbados - Barbadiano, barbadense                  " });
    list.push({ name: "Belize - Belizenho                                 " });
    list.push({ name: "Bolívia - Boliviano                                " });
    list.push({ name: "Brasil - Brasileiro                                " });
    list.push({ name: "Chile - Chileno                                    " });
    list.push({ name: "Colômbia - Colombiano                              " });
    list.push({ name: "Costa Rica - Costarriquenho                        " });
    list.push({ name: "Cuba - Cubano                                      " });
    list.push({ name: "Dominica - Dominicano                              " });
    list.push({ name: "Equador - Equatoriano                              " });
    list.push({ name: "El Salvador - Salvadorenho                         " });
    list.push({ name: "Granada - Granadino                                " });
    list.push({ name: "Guatemala - Guatemalteco                           " });
    list.push({ name: "Guiana - Guianês                                   " });
    list.push({ name: "Guiana Francesa - Guianense                        " });
    list.push({ name: "Haiti - Haitiano                                   " });
    list.push({ name: "Honduras - Hondurenho                              " });
    list.push({ name: "Jamaica - Jamaicano                                " });
    list.push({ name: "México - Mexicano                                  " });
    list.push({ name: "Nicarágua - Nicaraguense                           " });
    list.push({ name: "Panamá - Panamenho                                 " });
    list.push({ name: "Paraguai - Paraguaio                               " });
    list.push({ name: "Peru - Peruano                                     " });
    list.push({ name: "Porto Rico - Portorriquenho                        " });
    list.push({ name: "República Dominicana - Dominicana                  " });
    list.push({ name: "São Cristóvão e Nevis - São-cristovense            " });
    list.push({ name: "São Vicente e Granadinas - São-vicentino           " });
    list.push({ name: "Santa Lúcia - Santa-lucense                        " });
    list.push({ name: "Suriname - Surinamês                               " });
    list.push({ name: "Trinidad e Tobago - Trindadense                    " });
    list.push({ name: "Uruguai - Uruguaio                                 " });
    list.push({ name: "Venezuela - Venezuelano                            " });
    list.push({ name: "Alemanha - Alemão                                  " });
    list.push({ name: "Áustria - Austríaco                                " });
    list.push({ name: "Bélgica - Belga                                    " });
    list.push({ name: "Croácia - Croata                                   " });
    list.push({ name: "Dinamarca - Dinamarquês                            " });
    list.push({ name: "Eslováquia - Eslovaco                              " });
    list.push({ name: "Eslovênia - Esloveno                               " });
    list.push({ name: "Espanha - Espanhol                                 " });
    list.push({ name: "França - Francês                                   " });
    list.push({ name: "Grécia - Grego                                     " });
    list.push({ name: "Hungria - Húngaro                                  " });
    list.push({ name: "Irlanda - Irlandês                                 " });
    list.push({ name: "Itália - Italiano                                  " });
    list.push({ name: "Noruega - Noruego                                  " });
    list.push({ name: "Países Baixos - Holandês                           " });
    list.push({ name: "Polônia - Polonês                                  " });
    list.push({ name: "Portugal - Português                               " });
    list.push({ name: "Reino Unido - Britânico                            " });
    list.push({ name: "Inglaterra - Inglês                                " });
    list.push({ name: "País de Gales - Galês                              " });
    list.push({ name: "Escócia - Escocês                                  " });
    list.push({ name: "Romênia - Romeno                                   " });
    list.push({ name: "Rússia - Russo                                     " });
    list.push({ name: "Sérvio - Sérvio                                    " });
    list.push({ name: "Suécia - Sueco                                     " });
    list.push({ name: "Suíça - Suíço                                      " });
    list.push({ name: "Turquia - Turco                                    " });
    list.push({ name: "Ucrânia - Ucraniano                                " });
    list.push({ name: "Estados Unidos - Americano                         " });
    list.push({ name: "Canadá - Canadense                                 " });
    list.push({ name: "Angola - Angolano                                  " });
    list.push({ name: "Moçambique - Moçambicano                           " });
    list.push({ name: "África do Sul - Sul-africano                       " });
    list.push({ name: "Zimbabue - Zimbabuense                             " });
    list.push({ name: "Argélia - Argélia                                  " });
    list.push({ name: "Comores - Comorense                                " });
    list.push({ name: "Egito - Egípcio                                    " });
    list.push({ name: "Líbia - Líbio                                      " });
    list.push({ name: "Marrocos - Marroquino                              " });
    list.push({ name: "Gana - Ganés                                       " });
    list.push({ name: "Quênia - Queniano                                  " });
    list.push({ name: "Ruanda - Ruandês                                   " });
    list.push({ name: "Uganda - Ugandense                                 " });
    list.push({ name: "Botsuana - Bechuano                                " });
    list.push({ name: "Costa do Marfim - Marfinense                       " });
    list.push({ name: "Camarões - Camaronense                             " });
    list.push({ name: "Nigéria - Nigeriano                                " });
    list.push({ name: "Somália - Somali                                   " });
    list.push({ name: "Austrália - Australiano                            " });
    list.push({ name: "Nova Zelândia - Neozelandês                        " });
    list.push({ name: "Afeganistão - Afegão                               " });
    list.push({ name: "Arábia Saudita - Saudita                           " });
    list.push({ name: "Armênia - Armeno                                   " });
    list.push({ name: "Armeno - Bangladesh                                " });
    list.push({ name: "China - Chinês                                     " });
    list.push({ name: "Coréia do Norte - Norte-coreano, coreano           " });
    list.push({ name: "Coréia do Sul - Sul-coreano, coreano               " });
    list.push({ name: "Índia - Indiano                                    " });
    list.push({ name: "Indonésia - Indonésio                              " });
    list.push({ name: "Iraque - Iraquiano                                 " });
    list.push({ name: "Irã - Iraniano                                     " });
    list.push({ name: "Israel - Israelita                                 " });
    list.push({ name: "Japão - Japonês                                    " });
    list.push({ name: "Malásia - Malaio                                   " });
    list.push({ name: "Nepal - Nepalês                                    " });
    list.push({ name: "Omã - Omanense                                     " });
    list.push({ name: "Paquistão - Paquistanês                            " });
    list.push({ name: "Palestina - Palestino                              " });
    list.push({ name: "Qatar - Qatarense                                  " });
    list.push({ name: "Síria - Sírio                                      " });
    list.push({ name: "Sri Lanka - Cingalês                               " });
    list.push({ name: "Tailândia - Tailandês                              " });
    list.push({ name: "Timor-Leste - Timorense, maubere                   " });
    list.push({ name: "Emirados Árabes Unidos - Árabe, emiratense         " });
    list.push({ name: "Vietnã - Vietnamita                                " });
    list.push({ name: "Iêmen - Iemenita                                   " });

    list.forEach(async (element) => {
      var nationality = await _Nationality2.default.findOne({
        name: element.name.trim(),
      });
      if (!nationality) {
        await _Nationality2.default.create({
          name: element.name.trim(),
        });
      }
    });
    return res.status(200).json(true);
  }
  async listGender(req, res) {
    var list = [];
    list.push({ name: "Masculino" });
    list.push({ name: "Feminino" });
    list.forEach(async (element) => {
      var gender = await _Gender2.default.findOne({ name: element.name.trim() });
      if (!gender) {
        await _Gender2.default.create({
          name: element.name.trim(),
        });
      }
    });

    return res.status(200).json(true);
  }

  async listSkin(req, res) {
    var list = [];
    list.push({ name: "Branco" });
    list.push({ name: "Negro" });
    list.push({ name: "Pardo" });
    list.push({ name: "Amarelo" });
    list.forEach(async (element) => {
      var skin = await _Skin2.default.findOne({ name: element.name.trim() });
      if (!skin) {
        await _Skin2.default.create({
          name: element.name.trim(),
        });
      }
    });

    return res.status(200).json(true);
  }
}

exports. default = new InitDataController();

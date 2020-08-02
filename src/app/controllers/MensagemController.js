import * as Yup from "yup";
import uuid from "uuid-random";
import Mensagem from "../schemas/Mensagem";

class MensagemController {
  async create(req, res) {
    const { message, number } = req.body;

    var mensagemrCreated = await Mensagem.create({
      number: number,
      message: message,
      messageId: uuid(),
    });
    
    return res.status(200).json(mensagemrCreated);
  }

  async send(req, res) {
    const { deviceId, action } = req.body;
    console.log(`DEVICE ID${deviceId} AND ACTIOn${action}`);
    const msg = await Mensagem.findOne({ deviceId: null, action: null });
    if (!msg) return res.status(400).json("Sem mensagem");

    await msg.update({
      deviceId: deviceId,
      action: action,
    });

    return res.status(200).json(msg);
  }

  async status(req, res) {
    const { deviceId, messageId, status, action } = req.body;
    const msg = await Mensagem.findOne({ messageId: messageId });

    await msg.update({
      action: action,
      status: status,
    });
    return res.status(200).json(msg);
  }

  async received(req, res) {
    const { deviceId, number, message, action } = req.body;

    var mensagemrCreated = await Mensagem.create({
      deviceId: deviceId,
      number: number,
      message: message,
      action: action,
      messageId: uuid(),
    });

    return res.status(200).json(mensagemrCreated);
  }
}

export default new MensagemController();

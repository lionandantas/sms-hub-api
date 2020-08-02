import mongoose from "mongoose";

const MensagemSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: false,
    },
    number: {
      type: String,
      required: false,
    },
    messageId: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    action: {
      type: String,
      required: false,
    },
    deviceId: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Mensagem", MensagemSchema);

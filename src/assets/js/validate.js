import Schema from "validate";

const burger = new Schema({
    name: {
      type: String,
      required: true,
      message: 'Você deve informar o nome do cliente!'
    },
    bread: {
      type: String,
      required: true,
      message: 'Você deve escolher um tipo de pão!'
    },
    beef: {
      type: String,
      required: true,
      message: 'Você deve escolher um tipo de carne!'
    },
  });

export default burger
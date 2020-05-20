import env from "dotenv";
env.config();
const yandexCheckout = require('yandex-checkout')(process.env.YAN_SHOP_ID, process.env.YAN_SECRET_KEY);

export const createPayment = async (amount: number) => {
  var idempotenceKey = 'f0d67c2ed5a5-123wdasd';
  return await yandexCheckout.createPayment({
    'amount': {
      'value': amount,
      'currency': 'RUB'
    },
    'confirmation': {
      'type': 'embedded',
    },
    capture: true
  }, idempotenceKey);
};

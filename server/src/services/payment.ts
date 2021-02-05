import env from "dotenv";
env.config();
const yandexCheckout = require('yandex-checkout')({
  shopId: process.env.YAN_SHOP_ID,
  secretKey: process.env.YAN_SECRET_KEY,
  host: 'https://api.yookassa.ru',
  path: '/v3'
});

export const createPayment = async (amount: number) => {
  var idempotenceKey = 'f0d67c2ed5a5-' + Date.now();
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

export const getPayment = async (id: string) => {
  return await yandexCheckout.getPayment(id);
}

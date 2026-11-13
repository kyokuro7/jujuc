require('dotenv').config();

function required(key) {
  const v = process.env[key];
  if (!v) throw new Error(❌ ENV "${key}" wajib diisi);
  return v;
}

module.exports = {
  BOT_TOKEN: required('BOT_TOKEN'),
  WEBHOOK_DOMAIN: process.env.WEBHOOK_DOMAIN || '',
  WEBHOOK_PATH: process.env.WEBHOOK_PATH || '/telegraf',
  PORT: Number(process.env.PORT || 3000),
  isProd: process.env.NODE_ENV === 'production',
};
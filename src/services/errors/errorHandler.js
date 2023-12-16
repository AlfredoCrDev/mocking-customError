const errorDictionary = require('./enums');

function createError(code, details = {}) {
  const message = errorDictionary[code] || 'Error desconocido.';
  return { code, message, details };
}

module.exports = createError;

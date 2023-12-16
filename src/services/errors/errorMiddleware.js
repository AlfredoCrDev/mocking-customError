const createError = require('./errorHandler');

function errorMiddleware(err, req, res, next) {
  if (err instanceof Error) {
    console.error('Error del sistema:', err);
    const error = createError('INTERNAL_ERROR');
    res.status(500).json(error);
  } else if (typeof err === 'string') {
    const error = createError(err);
    res.status(400).json(error);
  } else {
    console.error('Error desconocido:', err);
    const error = createError('INTERNAL_ERROR');
    res.status(500).json(error);
  }
}

module.exports = errorMiddleware;

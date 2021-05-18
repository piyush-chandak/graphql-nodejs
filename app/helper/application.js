const responseHandler = (_req, res, payload, error) => {
  if (error) {
    const message = typeof(error) == 'object' ? error.message : error;
    res.status(400).send(message);
    return;
  }
  res.status(200).send(payload);
}

const formatId = (id) => {
  return parseInt(id, 10);
}

module.exports = {
  responseHandler,
  formatId
}
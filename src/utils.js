const response = {
  success: (res, data = []) => {
    return res.send({
      status: 200,
      message: 'success',
      data,
    })
  },
  failed: (res, message = 'response failed') => {
    return res.status(400).send({
      message
    })
  }
}

module.exports = response
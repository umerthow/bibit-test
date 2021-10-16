const response = {
  success: (res, data = []) => {
    return res.send({
      status: 200,
      message: 'success',
      data,
    })
  }
}

module.exports = response
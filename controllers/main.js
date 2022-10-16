const login = async (req, res) => {
  res.send('here is dashboard || register || login ')
}

const dashboard = async (req, res) => {
  let random_number = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `here is duplicate testing ans your newToken is :${random_number}`,
  })
}
module.exports = { login, dashboard }

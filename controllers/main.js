const CustomApiError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
  const { username, password } = req.body
  console.log(username, password)
  if (!username || !password) {
    throw new CustomApiError('please provide username and password', 400)
  }

  const id = new Date().getDate()
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
  let random_number = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `here is duplicate testing ans your newToken is :${random_number}`,
  })
}
module.exports = { login, dashboard }

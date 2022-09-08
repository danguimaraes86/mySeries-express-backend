const mongodb = require('../utils/mongodb')

const index = async (req, res) => {
  const user = await mongodb('Users').find().toArray()
  res.status(200).json(user)
}

const create = async (req, res) => {
  const { username, password } = req.body
  const { ops: user } = await mongodb('Users').insertOne({ username, password })
  res.status(201).json(user)
}

const remove = async (req, res) => {
  const { username } = req.params
  await mongodb('Users').deleteOne({ username: username })
  res.status(200).json({ msg: `user ${username} successfully deleted` })
}

module.exports = { index, create, remove }
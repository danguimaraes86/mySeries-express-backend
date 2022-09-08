const { MongoClient } = require('mongodb')

const uri = process.env.MONGO_URI
const client = new MongoClient(uri, { useUnifiedTopology: true })

module.exports = client
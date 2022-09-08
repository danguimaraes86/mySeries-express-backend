const client = require('../../config/mongodb')
const dbName = process.env.MONGO_DBNAME

function mongodb(collection) {
  return client.db(dbName).collection(collection)
}

module.exports = mongodb
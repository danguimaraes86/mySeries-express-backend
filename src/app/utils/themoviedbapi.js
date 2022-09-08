const axios = require('axios')

const tmdb = axios.create({
  baseURL: process.env.TMDB_BASEURL,
  headers: {
    'Authorization': `Bearer ${process.env.TMDB_APIKEY}`,
    'Content-Type': 'application/json'
  },
  validateStatus: function (status) {
    return status < 500
  }
})

module.exports = tmdb
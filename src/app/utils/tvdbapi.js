const axios = require('axios');
const { generateToken } = require('../utils/generateToken')

const tvdbapi = axios.create({
  baseURL: 'https://api.thetvdb.com',
  validateStatus: function (status) {
    return status < 500
  }
})

generateToken().then(token => {
  tvdbapi.defaults.headers.common['Authorization'] = `Bearer ${token}`
})

const bannerapi = 'https://artworks.thetvdb.com';

module.exports = {
  tvdbapi,
  bannerapi
}
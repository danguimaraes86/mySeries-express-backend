const { searchSeries, seriesDetails } = require('../app/controllers/searchController')
const { index, create, remove } = require('../app/controllers/userController')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
  })

  app.get('/users', index)
  app.post('/users', create)
  app.delete('/users/:username', remove)

  app.get('/search', searchSeries)
  app.get('/series', seriesDetails)
}
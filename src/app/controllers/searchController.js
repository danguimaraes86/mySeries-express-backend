const tmdb = require('../utils/themoviedbapi')

const searchSeries = async (req, res) => {
  const { query, language } = req.query

  let { data:searchResults } = await tmdb.get('/search/tv', { params: { query, language } })

  return res.json(searchResults)
}

const seriesDetails = async (req, res) => {

  const { id, language } = req.query

  let { data: seriesInfo } = await tmdb.get(`/tv/${id}`, { params: { language, append_to_response: 'external_ids' } })
  
  return res.json(seriesInfo)
}

module.exports = {
  searchSeries,
  seriesDetails
}
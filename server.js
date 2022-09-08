require('dotenv').config()
const app = require('./src/custom-express')

app.listen(3333, () => {
  console.log(`Servidor rodando na porta 3333`)
})
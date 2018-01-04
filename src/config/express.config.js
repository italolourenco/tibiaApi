const express = require('express')

//Import do graphqlHTTP que cria um servidor preparado pro GraphQL + HTTP
const graphqlHTTP = require('express-graphql')

const schema = require('../schemas/Character')

module.exports = () => {
  const app = express()

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.use(
    '/player',
    graphqlHTTP({
      schema,
      graphiql: true,
    }));

  return app
}

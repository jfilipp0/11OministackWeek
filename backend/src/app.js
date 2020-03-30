const cors = require('cors')
const {errors} = require('celebrate')
const express = require('express')
const routes = require('./routes')

const app = express()

app.use(cors({})) //{origin: 'http://example.com'}
app.use(express.json())
app.use(routes)

app.use(errors()) // celebrate to read the errors

module.exports = app


// Infos 

 /**
  * HTTP Methods:
  * 
  * GET: search/ list backend information
  * POST: create a information
  * PUT: Update a information
  * DELETE: Delete a information
  */

/**
 * Param types:
 * 
 * QUERY PARAMS:('/users?name=Juan')
 * Parameters sent in the route after "?"
 * used for Filters, Pages
 * 
 * ROUTE PARAMS:('/users/:id')
 * used for identify resources 
 * 
 * REQUEST BODY: 
 * requisition body, used to 
 * create or update a resource 
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle
  * NoSQL: MongoDB, CouchDB
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('user').select('*').where()
 */

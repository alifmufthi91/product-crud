const mysql = require('mysql2')
const fs = require('fs')
const path = require('path')
const env = require('../config/env')
const { exit } = require('process')

const dbConnection = mysql.createConnection({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  multipleStatements: true
})
const filePath = path.join(__dirname, './01-product-crud.sql')
const queryFile = fs.readFileSync(filePath).toString()

dbConnection.query(queryFile, function (err, results) {
  if (err) throw err
  console.log(results)
  exit()
})

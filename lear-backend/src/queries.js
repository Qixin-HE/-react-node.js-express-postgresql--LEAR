const Pool = require('pg').Pool
const pool = new Pool({
  user: 'zoe',
  host: 'ec2-3-135-214-208.us-east-2.compute.amazonaws.com',
  database: 'lear',
  password: 'Rootuser',
  port: 5432,
})
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://zoe:Rootuser@ec2-3-135-214-208.us-east-2.compute.amazonaws.com:5432/lear')

const getPenalties = (request, response) => {
    //pool.query('SELECT * FROM test_json_fine', (error, results) => {
        db.query('SELECT * FROM public.test_json_fine', (error, results) => {
    //   if (error) {
    //     throw error
    //   }
      response.status(200).json(results.rows);
      
    })
  }

  module.exports = {
    getPenalties,
 }
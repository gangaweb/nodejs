import path = require("path")

const result = require('dotenv').config({path:

path.join(__dirname, './../.env')

})
if (result.error) {
  // Can't read the Data from the .env
  throw result.error
}
export const env = result.parsed;


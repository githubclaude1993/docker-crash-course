const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "firstname":"John",
      "lastname":"Doe",
      "birthday":"01/28/1985",
      "gender":"male"
    },
    {
      "id":"2",
      "firstname":"Arthur",
      "lastname":"Donce",
      "birthday":"10/11/1978",
      "gender":"male"
    },
    {
      "id":"3",
      "firstname":"Christopher",
      "lastname":"Maren",
      "birthday":"02/19/1990",
      "gender":"male"
    },
    {
      "id":"4",
      "firstname":"Elizabeth",
      "lastname":"Roe",
      "birthday":"08/01/1991",
      "gender":"female"
    },
    {
      "id":"5",
      "firstname":"Jennifer",
      "lastname":"Rhodes",
      "birthday":"12/15/1986",
      "gender":"female"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})
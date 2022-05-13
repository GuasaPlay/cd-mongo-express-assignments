const express = require('express')
const cors = require('cors')

const Company = require('./classes/Company')
const User = require('./classes/User')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/users/new', (req, res) => {
   res.json({
      user: new User(),
   })
})

app.get('/api/companies/new', (req, res) => {
   res.json({
      company: new Company(),
   })
})

app.get('/api/user/company', (req, res) => {
   res.json({
      user: new User(),
      company: new Company(),
   })
})

const port = process.env.PORT || 4000

app.listen(port, () => {
   console.log(`🚀 Server ready at http://localhost:${port}`)
})

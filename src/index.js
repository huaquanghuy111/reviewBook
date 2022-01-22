import express from 'express'
import {} from 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser'
import db from './models'
import router from './routes/router'

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 5000
// db.sequelize.sync()
app.use(router)
app.use((req, res, next) => {
  res.status(404).send('Not Found')
  next()
})

app.use((err, req, res, next) => {
  res.status(500).json({
    errors: err.stack,
    message: err.message,
  })
  next()
})

app.listen(port, () => console.log(`server is running on ${port}`))

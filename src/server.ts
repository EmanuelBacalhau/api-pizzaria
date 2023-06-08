import express from 'express'
import 'express-async-errors'

import path from 'path'

import cors from 'cors'

import dotenv from 'dotenv'

import { router } from './routes'
import { errorHandling } from './middlewares/errorHandling'

dotenv.config()

const app = express()

// product pictures
app.use(
  '/files',
  express.static(path.resolve(__dirname, '../uploads/productPicture')),
)

app.use(cors())

app.use(express.json())

app.use(router)

app.use(errorHandling)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('Starting server in http://localhost:' + PORT)
})

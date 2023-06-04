import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'

import dotenv from 'dotenv'

import { router } from './routes'

dotenv.config()

const app = express()

app.use(express.json())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    })
  }

  return res.status(500).json({
    status: 'Error',
    message: 'Internal server error',
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('Starting server in http://localhost:' + PORT)
})

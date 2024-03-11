import 'express-async-errors'
import 'dotenv/config'
import express, { Application, json } from 'express'
import { clientRouter } from './routes/client.routes'
import { handleErrors } from './middlewares/handleErrors.middleware'
import cors from 'cors'

const corsConfig = {
  origin: 'http://localhost:5173',
  methods: 'GET,POST',
  credentials: true,
  optionSuccessStatus: '204'
}

export const app: Application = express()
app.use(cors(corsConfig))
app.use(json())

app.use('/clients', clientRouter)
app.use(handleErrors)
import 'express-async-errors'
import 'dotenv/config'
import express, { Application, json } from 'express'
import { clientRouter } from './routes/client.routes'
import { handleErrors } from './middlewares/handleErrors.middleware'

export const app: Application = express()
app.use(json())

app.use('/clients', clientRouter)
app.use(handleErrors)
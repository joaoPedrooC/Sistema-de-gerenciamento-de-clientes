import 'express-async-errors'
import 'dotenv/config'
import express, { Application, json } from 'express'
import { clientRouter } from './routes/client.routes'

export const app: Application = express()
app.use(json())

app.use('/clients', clientRouter)
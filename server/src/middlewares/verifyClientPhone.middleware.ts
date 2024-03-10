import { NextFunction, Request, Response } from "express";
import format from "pg-format";
import { client } from "../database/config";
import { TClient } from "../interfaces/client.interface";
import { AppError } from "../errors/App.error";

export const verifyClientPhoneMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const clientPhone: string = req.body.telefone

  const queryString: string = format(`
    SELECT * FROM "client" WHERE "telefone" = (%L)
  `, [clientPhone])

  const query = await client.query<TClient>(queryString)
  
  if(query.rowCount) {
    throw new AppError('Phone already exists.', 409)
  }

  return next()
}
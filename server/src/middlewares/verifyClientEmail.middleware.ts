import { NextFunction, Request, Response } from "express";
import format from "pg-format";
import { client } from "../database/config";
import { AppError } from "../errors/App.error";

export const verifyClientEmailMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const clientEmail: string = req.body.email

  const queryString: string = format(`
    SELECT * FROM "client" WHERE "email" = (%L);
  `, [clientEmail])

  const query = await client.query(queryString)

  if(query.rowCount) {
    throw new AppError('E-mail already exists.', 409)
  }

  return next()
}
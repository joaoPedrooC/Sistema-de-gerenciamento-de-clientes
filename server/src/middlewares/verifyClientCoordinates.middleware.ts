import { NextFunction, Request, Response } from "express";
import format from "pg-format";
import { client } from "../database/config";
import { AppError } from "../errors/App.error";

export const verifyClientCoordinates = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const coordinateX = req.body.coordinate_x
  const coordinateY = req.body.coordinate_y

  const queryString = format(`
    SELECT * FROM "client" WHERE (%I) = (%L) AND (%I) = (%L);
  `,
  ['coordinate_x'], [coordinateX],
  ['coordinate_y'], [coordinateY])

  const query = await client.query(queryString)

  if(query.rowCount) {
    throw new AppError('Coordinates already registered.', 409)
  }

  return next()
}
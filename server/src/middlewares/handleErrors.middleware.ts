import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";
import { ZodError } from "zod";

export const handleErrors = (error: unknown, req: Request, res: Response, next: NextFunction): Response => {
  if(error instanceof AppError) {
    return res.status(error.status).json({ message: error.message });
  }

  if(error instanceof ZodError) {
    return res.status(400).json(error.flatten().fieldErrors);
  }

  console.log(error);
  return res.status(500).json({ message: 'Internal server error' });
}
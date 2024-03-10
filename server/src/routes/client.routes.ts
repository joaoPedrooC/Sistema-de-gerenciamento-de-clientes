import { Request, Response, Router } from "express";
import { clientController } from "../controllers";

export const clientRouter: Router = Router()

clientRouter.post('/', (req: Request, res: Response) => clientController.create(req, res))
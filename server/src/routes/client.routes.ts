import { Request, Response, Router } from "express";
import { clientController } from "../controllers";
import { verifyClientEmailMiddleware } from "../middlewares/verifyClientEmail.middleware";
import { verifyClientPhoneMiddleware } from "../middlewares/verifyClientPhone.middleware";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { ClientCreateSchema } from "../schemas/client.schema";

export const clientRouter: Router = Router()

clientRouter.post('/', validateBodyMiddleware(ClientCreateSchema), verifyClientEmailMiddleware, verifyClientPhoneMiddleware, (req: Request, res: Response) => clientController.create(req, res))
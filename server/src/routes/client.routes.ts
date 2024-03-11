import { Request, Response, Router } from "express";
import { clientController } from "../controllers";
import { verifyClientEmailMiddleware } from "../middlewares/verifyClientEmail.middleware";
import { verifyClientPhoneMiddleware } from "../middlewares/verifyClientPhone.middleware";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { ClientCreateSchema } from "../schemas/client.schema";
import { verifyClientCoordinates } from "../middlewares/verifyClientCoordinates.middleware";

export const clientRouter: Router = Router()

clientRouter.post('/', validateBodyMiddleware(ClientCreateSchema), verifyClientEmailMiddleware, verifyClientPhoneMiddleware, verifyClientCoordinates, (req: Request, res: Response) => clientController.create(req, res))
clientRouter.get('/', (req: Request, res: Response) => clientController.list(req, res))
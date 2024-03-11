import { ClientService } from "../services/client.service";
import { ClientController } from "./client.controller";

const clientService: ClientService = new ClientService()
export const clientController: ClientController = new ClientController(clientService)
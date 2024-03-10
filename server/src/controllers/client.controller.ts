import { Request, Response, query } from "express";
import { ClientService } from "../services/client.service";
import { TClientCreate } from "../interfaces/client.interface";

export class ClientController {
  constructor(private clientService: ClientService) { }

  async create(req: Request, res: Response): Promise<Response> {
    const clientCreateData: TClientCreate = req.body
    const newClient = await this.clientService.create(clientCreateData)

    return res.status(201).json(newClient)
  }

  async list(req: Request, res: Response): Promise<Response> {
    const queryParams = req.query
    const clients = await this.clientService.list(queryParams)

    return res.status(200).json(clients)
  }
}
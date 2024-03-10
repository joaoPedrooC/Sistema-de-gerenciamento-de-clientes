import { Request, Response } from "express";
import { ClientService } from "../services/client.service";
import { TClientCreate } from "../interfaces/client.interface";

export class ClientController {
  constructor(private clientService: ClientService) { }

  async create(req: Request, res: Response): Promise<Response> {
    const clientCreateData: TClientCreate = req.body
    const newClient = await this.clientService.create(clientCreateData)

    return res.status(201).json(newClient)
  }
}
import format from "pg-format";
import { TClient, TClientCreate } from "../interfaces/client.interface";
import { client } from "../database/config";

export class ClientService {
  async create(data: TClientCreate): Promise<TClient> {
    const queryString = format(`
      INSERT INTO "client" (%I) VALUES (%L)
      RETURNING *;
    `,
    Object.keys(data),
    Object.values(data))

    const query = await client.query(queryString)

    return query.rows[0]
  }
}
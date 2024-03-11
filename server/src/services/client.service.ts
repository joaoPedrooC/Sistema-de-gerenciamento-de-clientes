import format from "pg-format";
import { TClient, TClientCreate, TGetClientParams } from "../interfaces/client.interface";
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

  async list(params: TGetClientParams): Promise<Array<TClient>> {
    const keyParam = Object.keys(params)
    const valueParam = Object.values(params)[0]

    let queryString: string = 'SELECT * FROM "client";'

    if(keyParam[0]) {
      queryString = format(`
        SELECT * FROM "client" WHERE (%I) ILIKE (%L);
      `, keyParam, [`%${valueParam}%`])
    }

    const query = await client.query(queryString)

    return query.rows
  }
}
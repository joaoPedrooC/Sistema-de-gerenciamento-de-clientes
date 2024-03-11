import format from 'pg-format'
import { TClient, TClientCreate, TGetClientParams } from '../interfaces/client.interface'
import { client } from '../database/config'

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

		if (keyParam[0]) {
			queryString = format(
				`
        SELECT * FROM "client" WHERE (%I) ILIKE (%L);
      `,
				keyParam,
				[`%${valueParam}%`]
			)
		}

		const query = await client.query(queryString)

		return query.rows
	}

	async getRoute(): Promise<Array<TClient>> {
		const clients = await client.query<TClient>(
			`SELECT * FROM "client";`
		)

		if (!clients.rowCount) {
			return []
		}

    const clientsArray: Array<TClient> = clients.rows
		const orderedClients: Array<TClient> = []

		while (clients.rows.length > 0) {
			const getDistancesFromIndex = clientsArray.map(readingClient => {
        const coordinateX = orderedClients.length > 0
						? orderedClients[orderedClients.length - 1].coordinate_x
						: undefined
        const coordinateY = orderedClients.length > 0
            ? orderedClients[orderedClients.length - 1].coordinate_y
            : undefined

				return {
					...readingClient,
					distance: Math.sqrt(
						Math.pow(readingClient.coordinate_x - (coordinateX ? coordinateX : 0), 2) +
            Math.pow(readingClient.coordinate_y - (coordinateY ? coordinateY : 0), 2)
					),
				}
			})

			const firstCoordinate = getDistancesFromIndex.sort((coordA, coordB) => coordA.distance - coordB.distance)[0]
			const removingIndex = clientsArray.findIndex(({ id }) => id === firstCoordinate.id)

			const closestClient = clientsArray.splice(removingIndex, 1)
			orderedClients.push(closestClient[0]);
		}

    return orderedClients
	}
}

import { NextCron } from "../next-cron";
import {
  CreateApiKey,
  CreateApiKeyResponse,
  DeleteApiKeyResponse,
  ListApiKeyResponse,
} from "./types";

export class ApiKeys {
  readonly #client: NextCron;

  constructor(client: NextCron) {
    this.#client = client;
  }

  list() {
    return this.#client.get<ListApiKeyResponse>("/api-keys");
  }

  create(data: CreateApiKey) {
    return this.#client.post<CreateApiKeyResponse>("/api-keys", data);
  }

  delete(id: string) {
    return this.#client.delete<DeleteApiKeyResponse>(`/api-keys/${id}`);
  }
}

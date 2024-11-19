import type { NextCron } from "../next-cron";
import {
  CreateCron,
  CreateCronResponse,
  DeleteCronReseponse,
  GetCronResponse,
  ListCronResponse,
  UpdateCron,
  UpdateCronResponse,
} from "./types";

export class Cron {
  readonly client: NextCron;

  constructor(client: NextCron) {
    this.client = client;
  }

  get(id: string) {
    this.client.get<GetCronResponse>(`/cron/${id}`);
  }

  list() {
    this.client.get<ListCronResponse>("/cron");
  }

  create(data: CreateCron) {
    this.client.post<CreateCronResponse>("/cron", data);
  }

  update({ id, ...data }: UpdateCron) {
    this.client.patch<UpdateCronResponse>(`/cron/${id}`, data);
  }

  delete(id: string) {
    this.client.delete<DeleteCronReseponse>(`/cron/${id}`);
  }
}

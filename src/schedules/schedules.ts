import type {
  DeleteScheduleResponse,
  GetScheduleResponse,
  CreateSchedule,
  CreateScheduleResponse,
  ListScheduleResponse,
  UpdateSchedule,
  UpdateScheduleResponse,
  DeleteSchedulesByTagResponse,
} from "./types";
import type { NextCron } from "../next-cron";

export class Schedules {
  readonly #client: NextCron;

  constructor(client: NextCron) {
    this.#client = client;
  }

  get(id: string) {
    return this.#client.get<GetScheduleResponse>(`/schedules/${id}`);
  }

  list() {
    return this.#client.get<ListScheduleResponse>("/schedules");
  }

  create<T extends CreateSchedule>(data: T) {
    return this.#client.post<CreateScheduleResponse<T>>("/schedules", data);
  }

  update({ id, ...data }: UpdateSchedule) {
    return this.#client.patch<UpdateScheduleResponse>(`/schedules/${id}`, data);
  }

  delete(id: string | string[]) {
    if (Array.isArray(id)) {
      return this.#client.delete<DeleteScheduleResponse>(`/schedules`, {
        data: { id },
      });
    }

    return this.#client.delete<DeleteScheduleResponse>(`/schedules/${id}`);
  }

  deleteByTag(tag: string) {
    return this.#client.delete<DeleteSchedulesByTagResponse>(
      `/schedules/by-tag/${tag}`
    );
  }
}

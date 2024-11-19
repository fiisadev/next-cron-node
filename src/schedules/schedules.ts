import type {
  DeleteScheduleResponse,
  GetScheduleResponse,
  CreateSchedule,
  CreateScheduleResponse,
  ListScheduleResponse,
  UpdateSchedule,
  UpdateScheduleResponse,
} from "./types";
import type { NextCron } from "../next-cron";

export class Schedules {
  readonly client: NextCron;

  constructor(client: NextCron) {
    this.client = client;
  }

  get(id: string) {
    return this.client.get<GetScheduleResponse>(`/schedules/${id}`);
  }

  list() {
    return this.client.get<ListScheduleResponse>("/schedules");
  }

  create(data: CreateSchedule) {
    return this.client.post<CreateScheduleResponse>("/schedules", data);
  }

  update({ id, ...data }: UpdateSchedule) {
    return this.client.patch<UpdateScheduleResponse>(`/schedules/${id}`, data);
  }

  delete(id: string) {
    return this.client.delete<DeleteScheduleResponse>(`/schedules/${id}`);
  }
}

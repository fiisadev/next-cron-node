export interface Schedule {
  id: string;
  name: string;
  status: "Scheduled" | "Canceled" | "Failed";
  createdAt: string;
  scheduledAt: string;
  endpoint: string;
  data: string | null;
  tags: string[];
}

export interface GetScheduleResponse extends Schedule {}

export interface ListScheduleResponse {
  size: number;
  schedules: Schedule[];
}

export type CreateSchedule =
  | {
      name: string;
      endpoint: string;
      scheduledAt: Date | string;
      timezone?: string;
      data?: string | null;
      tags?: string[];
    }
  | {
      name: string;
      endpoint: string;
      scheduledAt: Date | string;
      timezone?: string;
      data?: string | null;
      tags?: string[];
    }[];

export type CreateScheduleResponse<T extends CreateSchedule> = T extends any[]
  ? { created: number }
  : Schedule;

export interface DeleteScheduleResponse {
  id: string;
  deleted: boolean;
}

export interface UpdateSchedule {
  id: string;
  name?: string;
  scheduledAt?: Date | string;
  endpoint?: string;
  data?: string | null;
  tags?: string[];
}

export interface UpdateScheduleResponse extends Schedule {}

export interface DeleteSchedulesByTagResponse {
  ids: string[];
}

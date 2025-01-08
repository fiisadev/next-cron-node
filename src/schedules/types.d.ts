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

export interface CreateSchedule {
  name: string;
  endpoint: string;
  scheduledAt: Date | string;
  timezone?: string;
  data: string | null;
  tags: string[];
}

export interface CreateScheduleResponse extends Schedule {}

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

export interface Schedule {
  id: string;
  name: string;
  status: "Scheduled" | "Canceled" | "Failed";
  createdAt: Date;
  scheduledAt: Date;
  webhookId: string;
  data: string | null;
}

export interface GetScheduleResponse extends Schedule {}

export interface ListScheduleResponse {
  size: number;
  schedules: Schedule[];
}

export interface CreateSchedule {
  name: string;
  webhookId: string;
  scheduledAt: Date;
  timezone?: string;
  data: string | null;
}

export interface CreateScheduleResponse extends Schedule {}

export interface DeleteScheduleResponse {
  id: string;
  deleted: boolean;
}

export interface UpdateSchedule {
  id: string;
  name?: string;
  scheduledAt?: Date;
  webhookId?: string;
  data?: string | null;
}

export interface UpdateScheduleResponse extends Schedule {}

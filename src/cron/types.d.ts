export interface Cron {
  id: string;
  expression: string;
  invocations: number;
  endpoint: string;
  status: "Active" | "Paused";
  createdAt: string;
  nextInvocation: string | null;
}

export interface GetCronResponse extends Cron {}

export interface ListCronResponse {
  size: number;
  cron: Cron[];
}

export interface CreateCron {
  name: string;
  expression: string;
  endpoint: string;
  timezone?: string;
}

export interface CreateCronResponse extends Cron {}

export interface UpdateCron {
  id: string;
  name?: string;
  endpoint?: string;
  disabled?: boolean;
}

export interface UpdateCronResponse extends Cron {}

export interface DeleteCronReseponse {
  id: string;
  deleted: boolean;
}

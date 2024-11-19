export interface Cron {
  id: string;
  expression: string;
  invocations: number;
  webhookId: string;
  status: "Active" | "Paused";
  createdAt: Date;
  nextInvocation: Date | null;
}

export interface GetCronResponse extends Cron {}

export interface ListCronResponse {
  size: number;
  cron: Cron[];
}

export interface CreateCron {
  name: string;
  expression: string;
  webhookId: string;
  timezone?: string;
}

export interface CreateCronResponse extends Cron {}

export interface UpdateCron {
  id: string;
  name?: string;
  webhookId?: string;
  disabled?: boolean;
}

export interface UpdateCronResponse extends Cron {}

export interface DeleteCronReseponse {
  id: string;
  deleted: boolean;
}

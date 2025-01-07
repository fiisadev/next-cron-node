export type WebhookEvent = (
  | {
      type: "schedule";
      scheduleId: string;
      cronId?: undefined;
    }
  | {
      type: "cron";
      cronId: string;
      scheduleId?: undefined;
    }
) & {
  endpoint: string;
  data?: object;
};

import { Schedules } from "./schedules/schedules";
import { Cron } from "./cron/cron";
import { ApiKeys } from "./api-keys/api-keys";

const baseUrl = process.env.NEXT_CRON_BASE_URL || "https://api.next-cron.com";

export class NextCron {
  private readonly headers: Headers;

  readonly schedule: Schedules = new Schedules(this);
  readonly cron: Cron = new Cron(this);
  readonly apiKeys: ApiKeys = new ApiKeys(this);

  constructor(key?: string) {
    if (!key) {
      key = process.env.NEXT_CRON_API_KEY;
    }

    if (!key) {
      throw new Error("Missing API key.");
    }

    this.headers = new Headers({
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    });
  }

  async fetchRequest<T>(path: string, options = {}) {
    const res = await fetch(`${baseUrl}${path}`, options);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = (await res.json()) as T;
    return data;
  }

  async get<T>(path: string, options = {}) {
    return this.fetchRequest<T>(path, {
      method: "GET",
      headers: this.headers,
      ...options,
    });
  }

  async post<T>(path: string, data?: unknown, options = {}) {
    return this.fetchRequest<T>(path, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
      ...options,
    });
  }

  async patch<T>(path: string, data: unknown, options = {}) {
    return this.fetchRequest<T>(path, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data),
      ...options,
    });
  }

  async delete<T>(path: string, options = {}) {
    return this.fetchRequest<T>(path, {
      method: "DELETE",
      headers: this.headers,
      ...options,
    });
  }
}

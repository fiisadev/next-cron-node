import { NextCron } from "../next-cron";
import { createHmac, timingSafeEqual } from "crypto";
import { SignatureError } from "./signature-error";
import { WebhookEvent } from "./types";

export const constructEvent = (
  body: string,
  signature: string,
  secret: string
): WebhookEvent => {
  const expectedSignature = createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  let isMatch = false;

  try {
    isMatch = timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(signature)
    );
  } catch (e) {
    if (e instanceof TypeError) {
      throw new SignatureError("Invalid signature format");
    }

    throw e;
  }

  if (!isMatch) {
    throw new SignatureError("Signatures do not match");
  }

  return JSON.parse(body);
};

export class Webhooks {
  readonly #client: NextCron;

  constructor(client: NextCron) {
    this.#client = client;
  }

  constructEvent = constructEvent;
}

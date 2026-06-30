import { pgEnum } from "drizzle-orm/pg-core";

export const payPeriodEnum = pgEnum("pay_period", [
  "hourly",
  "monthly",
  "yearly",
]);

export const applicationStatusEnum = pgEnum("application_status", [
  "accepted",
  "pending",
  "rejected",
]);

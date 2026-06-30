CREATE TYPE "public"."application_status" AS ENUM('accepted', 'pending', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."pay_period" AS ENUM('hourly', 'monthly', 'yearly');--> statement-breakpoint
CREATE TABLE "recruiters" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"company_name" varchar(255) NOT NULL,
	"industry" varchar(100),
	"city" varchar(100),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "recruiters_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "recruiterApplications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255),
	"salary" integer,
	"currency" varchar(3) DEFAULT 'INR' NOT NULL,
	"pay_period" "pay_period" DEFAULT 'yearly' NOT NULL,
	"company_name" varchar(255) NOT NULL,
	"industry" varchar(100),
	"locality" varchar(150),
	"city" varchar(100) NOT NULL,
	"country" varchar(100) NOT NULL,
	"phone" varchar(20),
	"status" "application_status" DEFAULT 'pending' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "workers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"age" integer,
	"profession" text[],
	"city" varchar(100),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "workers_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "workerApplications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"worker_id" uuid NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255),
	"salary_expectation" integer,
	"currency" varchar(3) DEFAULT 'INR' NOT NULL,
	"pay_period" "pay_period" DEFAULT 'yearly' NOT NULL,
	"locality" varchar(150),
	"city" varchar(100) NOT NULL,
	"country" varchar(100) NOT NULL,
	"industry" varchar(100) NOT NULL,
	"phone" varchar(20),
	"status" "application_status" DEFAULT 'pending' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "recruiters" ADD CONSTRAINT "recruiters_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "recruiterApplications" ADD CONSTRAINT "recruiterApplications_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workers" ADD CONSTRAINT "workers_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workerApplications" ADD CONSTRAINT "workerApplications_worker_id_workers_id_fk" FOREIGN KEY ("worker_id") REFERENCES "public"."workers"("id") ON DELETE cascade ON UPDATE no action;
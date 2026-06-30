import z from "zod";

export const recruiterModel = z.object({
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(255, "Company name cannot exceed 255 characters")
    .trim(),

  industry: z.string().max(100, "Industry cannot exceed 100 characters").trim(),

  city: z.string().max(100, "City cannot exceed 100 characters").trim(),
});

export type Recruiter = z.infer<typeof recruiterModel>;

export const recruiterUpdateModel = z.object({
  companyName: z
    .string()
    .max(255, "Company name cannot exceed 255 characters")
    .trim(),

  industry: z.string().max(100, "Industry cannot exceed 100 characters").trim(),

  city: z.string().max(100, "City cannot exceed 100 characters").trim(),
});

export type UpdateRecruiter = z.infer<typeof recruiterUpdateModel>;

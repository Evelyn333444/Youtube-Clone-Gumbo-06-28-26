import { object, string, TypeOf } from "zod";

export const loginSchema = {
  body: object({
    email: string("email is required").email("Not a valid email"),
    password: string("password is required")
      .min(6, "password must be at least 6 characters")
      .max(64, "password must not be longer than 64 characters"),
  }),
};

export type LoginBody = TypeOf<typeof loginSchema.body>;

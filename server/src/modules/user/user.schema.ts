import { object, string, TypeOf } from "zod";

export const registerUserSchema = {
  body: object({
    username: string("username is required"),
    email: string("email is required").email("must be a valid email"),
    password: string("password is required")
      .min(6, "Password must be at least 6 characters long")
      .max(64, "Password should not be longer than 64 characters"),
    confirmPassword: string("confirmPassword is required"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }),
};

export type RegisterUserBody = TypeOf<typeof registerUserSchema.body>;

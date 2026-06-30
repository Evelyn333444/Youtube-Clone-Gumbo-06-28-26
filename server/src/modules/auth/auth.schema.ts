import { object, string, TypeOf } from "zod";

export const loginSchema = {
    body: object({
        email: string("email is required").email("not a valid email"),
        password: string("password is required")
            .min(6, "Password must be at least 6 characters long")
            .max(64, "Password must be less than 64 characters long."),
    }),
};

export type LoginBody = TypeOf<typeof loginSchema.body>;

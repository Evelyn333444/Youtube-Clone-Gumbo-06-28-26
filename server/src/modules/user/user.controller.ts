import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { RegisterUserBody } from "./user.schema";
import { createUser } from "./user.service";

export async function registerUserHandler(req: Request<{}, {}, RegisterUserBody>, res: Response) {
    const {username, email, password} = req.body

    console.log(req.body);

    try{
        await createUser({username, email, password})

        return res.status(StatusCodes.CREATED).send("user created successfully");
    } catch (e) {
        if (e && typeof e === "object" && "code" in e && (e as { code: number }).code === 11000) {
            return res.status(StatusCodes.CONFLICT).send("User already exists");
        }

        const message = e instanceof Error ? e.message : "Something went wrong";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(message);
    }
}
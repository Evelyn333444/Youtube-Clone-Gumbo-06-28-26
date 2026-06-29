import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { signJWT } from "./auth.utils";
import { findUserByEmail } from "../user/user.service";
import omit from "../../helpers/omit";
import { LoginBody } from "./auth.schema";
export async function loginHandler(
    req: Request<{}, {}, LoginBody>,
    res: Response
) {
    const {email, password} =req.body

    //find the user by email
const user = await findUserByEmail(email);

if (!user || !user.comparePassword(password)) {
    return res.status(StatusCodes.UNAUTHORIZED).send("invalid email or password");
}

const payload = omit (user.toJSON(), ["password", "__v"]);

const jwt = signJWT(payload)

res.cookie("accessToken", jwt, {
    maxAge: 3.154e10, // 1 year
    httpOnly: true, 
    domain: 'localhost', 
    path: '/', 
    sameSite: "strict",
    secure: false,
});

return res.status(StatusCodes.OK).send(jwt);


        //check user exists - return error if not

    //verify user password

        //if wrong password - return error

    //sign a jwt

    //add a cookie to the response

    //respond
}
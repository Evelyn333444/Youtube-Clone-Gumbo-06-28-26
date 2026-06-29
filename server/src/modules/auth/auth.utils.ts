import jwt, { type SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";
const EXPIRES_IN = process.env.EXPIRES_IN || "7d";

export function signJWT(payload: string | Buffer | object) {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: EXPIRES_IN as SignOptions["expiresIn"],
    });
}

export function verifyJwt(token: string){
    try{
        const decoded = jwt.verify(token,JWT_SECRET);

        return decoded;
    }catch(e){
        return null
    }
}
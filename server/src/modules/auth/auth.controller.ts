import {Request, Response} from 'express'
export async function loginHandler(req, res){
    const {email, password} =req.body

    //find the user by email

        //check user exists - return error if not

    //verify user password

        //if wrong password - return error

    //sign a jwt

    //add a cookie to the response
    
    //respond
}
import { Request, Response } from "express";
import busboy from "busboy";
import { createVideo } from "./video.service";

const MIME_TYPES = ['']

export async function uploadVideoHandler(req: Request, res: Response){

   
    const bb = busboy({headers: req.headers})

    
    const user = res.locals.user

    const video = await createVideo({owner: user.id})

    bb.on('file', async (_, file, info) =>{

        if(!)

    })
}
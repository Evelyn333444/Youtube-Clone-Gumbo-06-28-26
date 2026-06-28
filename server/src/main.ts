import express from "express";

const PORT= process.env.PORT || 4000;

const app = express()


const server = app.listen(PORT, () =>{
    console.log('Server listening at htp://localhost:$(PORT)')
})

import express from "express";

const PORT= process.env.PORT || 4000;

const app = express()


const server = app.listen(PORT, () =>{
    console.log('Server listening at htp://localhost:$(PORT)')
});

const signals = ["SIGTERM", "SIGINT"]

function gracefulShutdown(signal: string){
    process.on(signal, async () =>{
        logger.info("Goodbye, got signal", signal);
        server.close()

        //disconnect from the db

        logger.info("My work here is done");

        process.exit(0);
    });
}

for(let i =0; i < signals.length; i++){
    gracefulShutdown(signals[i])
}

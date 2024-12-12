import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
const app = express();


app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  };

app.use(cors(corsOptions));

const mongoDBURL = 'mongodb://localhost:27017/mytestDb';

mongoose.connect(mongoDBURL).then(()=> {
    console.log("Connected successfully");
    
})
.catch((err)=> {
    console.log("received an error: ",err);
    
})

app.use("/",userRoutes)


const PORT = 3000;
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);

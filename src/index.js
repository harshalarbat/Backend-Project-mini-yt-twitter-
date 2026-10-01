import mongoose from "mogoose"
import {DB_name} from "./constants"
import express from "express"
import { error } from "node:console"

const app = express()


(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        app.on("error", (error)=>{
            console.log("Error :" , error);
            throw err;
        })
    }catch (error){
        console.error("Error :" , error);
        throw err
    }
})()
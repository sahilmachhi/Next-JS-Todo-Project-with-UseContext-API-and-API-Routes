import mongoose from "mongoose";

const DB_URL = process.env.MONGODB_URI as string || "";

type ConnnectionObject = {
    isConnected?: number
}
const connection: ConnnectionObject = {}

export const ConnectDB = async () => {
    if (connection.isConnected) {
        console.log("MongoDB is already connected")
        return
    }
    try {
        const DB = await mongoose.connect(DB_URL)
        console.log("MongoDB connected: ", DB.connections[0].readyState);
        connection.isConnected = DB.connections[0].readyState
        return DB
    } catch (error) {
        console.error("ERROR: connecting on DB", error);
        process.exit(1);
    }
}
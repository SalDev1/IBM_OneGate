import mongoose from "mongoose";

const connectDb = async () => {
    try {
        //saptak-db for testing amenities
        // const db = await mongoose.connect(`mongodb+srv://admin1234:admin1234@mern-cluster.sbdelpp.mongodb.net/merndb?retryWrites=true&w=majority&appName=mern-cluster`)

        const db = await mongoose.connect("mongodb+srv://admin1234:admin1234@cluster0.aq5gu4w.mongodb.net/onegate?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`MongoDB connected to ${db.connection.host}`)
    } catch(err) {
        console.log(`Failed to connect to MongoDB ${err.message}`);
    }
}

export default connectDb;
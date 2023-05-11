import mongoose from "mongoose";
import config from "config";

async function connect(){
    const dbUri = config.get<string>('dbUri');
    try {
        await mongoose.connect(dbUri);
        console.log("DB connection established");
        
    } catch (error) {
        console.log(error, 'Error connecting to MongoDB');
        process.exit(1);
    }
}

export default connect
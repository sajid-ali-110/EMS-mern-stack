import mongoose  from "mongoose";

const connectDatabase = async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("done mama g")
    } catch (error) {
        console.log(error)
    }
}

export default connectDatabase
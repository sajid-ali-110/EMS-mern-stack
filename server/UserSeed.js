import connectDatabase from "./db/db.js"
import User from "./models/User.js"
import mongoose from "mongoose";
import bycrypt from "bcrypt"

const userRegister = async () => {
 await   connectDatabase()
    try {
        const hashPassword = await bycrypt.hash("admin", 10)
        const newUser = new User ({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        })
        await newUser.save()
    } catch (error) {
        console.log(error)
    }
}

userRegister();
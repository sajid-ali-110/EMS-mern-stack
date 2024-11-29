import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./db/db.js";
import authRouter from "./routes/auth.js";
import departmentRouter from "./routes/department.js";
import bodyParser from "body-parser";
import "./UserSeed.js";

const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", authRouter);
app.use("/api/department", departmentRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on server ${process.env.PORT}`);
});

connectDatabase();

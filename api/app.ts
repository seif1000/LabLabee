import Express, { Request, Response } from "express";
import { router } from "./routes/labs.routes";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
let app: Express.Application;

app = Express();

app.use(Express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_DB as string)
  .then(() => {
    //console.log("mongodb connected");
  })
  .catch((error) => {
    // console.log("mongodb connection error", error);
  });

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("server is healthy");
});

app.use("/api/v1/labs", router);

export default app;

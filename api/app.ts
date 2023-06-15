import Express, { Request, Response } from "express";
import { router } from "./routes/labs.routes";
import mongoose from "mongoose";

let app: Express.Application;

app = Express();

app.use(Express.json());

mongoose
  .connect(
    "mongodb+srv://lablabee:lablabee@cluster0.sn8ll9s.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log("mongodb connection error", error);
  });

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("server is healthy");
});

app.use("/api/v1/labs", router);

export default app;

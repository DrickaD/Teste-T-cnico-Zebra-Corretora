import cors from "cors";
import "express-async-errors";
import helmet from "helmet";
import express, { json } from "express";
import { stateRoutes } from "./routes/routes";




export const app = express();
app.use(cors());
app.use(json());
app.use(helmet());
app.use("/states", stateRoutes);





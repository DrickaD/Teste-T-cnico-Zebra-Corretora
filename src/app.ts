import "express-async-errors";
import helmet from "helmet";
import express, { json } from "express";
import { stateRoutes } from "./routes/routes";

// import { handleErrors } from "./error/handleErrors.middlewares";



export const app = express();
app.use(json());
app.use(helmet());
app.use("/states", stateRoutes);


// app.use(handleErrors);

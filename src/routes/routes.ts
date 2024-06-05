import { Router } from "express";
import { statesControllers } from "../controllers/controllers";

export const stateRoutes = Router();

stateRoutes.get("/", 
statesControllers.getStates);

stateRoutes.get("/cities/:uf", statesControllers.getCities);
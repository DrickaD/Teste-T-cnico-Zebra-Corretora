import { Request, Response } from "express";
import { stateServices } from "../services/services";

export class StateControllers{
    public getStates = async (req: Request, res: Response): Promise<Response>=>{
        const listStates = await stateServices.getList();
        return res.status(200).json(listStates);   
    }
}

export const statesControllers = new StateControllers();
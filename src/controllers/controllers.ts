import { Request, Response } from "express";
import { stateServices } from "../services/services";

export class StateControllers{
    public getStates = async (req: Request, res: Response): Promise<Response>=>{
        const listStates = await stateServices.getListStates();
        return res.status(200).json(listStates);   
    }

    public getCities = async (req: Request, res: Response): Promise<Response>=>{
        const uf = Number(req.params.uf)
        const listCities = await stateServices.getListCities(uf);
        return res.status(200).json(listCities);   
    }

}

export const statesControllers = new StateControllers();
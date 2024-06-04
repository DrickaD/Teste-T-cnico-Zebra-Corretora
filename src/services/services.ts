import { CesarCipher } from './functionCesarCipher';
import axios from "axios";
import { State } from "../interface/interface";
import { StateSchema } from "../schemas/schema";


export class StateServices{
    public getList = async(): Promise<Array<State>> =>{

        const {data} = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
        const response = await StateSchema.array().parseAsync(data);

        const hashNamesStates = response.map(state => ({
            ...state,
            nome: CesarCipher(state.nome, 7)
          }));
    
          return hashNamesStates;
    };
}

export const stateServices = new StateServices();
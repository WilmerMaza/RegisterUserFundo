import { Athlete } from "./models/athlete.model";


export const createUser = (entrada: any): Promise<Athlete> => {
    return Athlete.create(entrada);
}
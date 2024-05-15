import { Athlete } from "./models/athlete.model";


export const createUser = (entrada:any): Promise<Athlete> => {
    return Athlete.create(entrada);
}

export const updateUser = (entrada: Athlete, ID: string): Promise<number> => {
    return Athlete.update(entrada, { where: { ID } }).then(result => result[0]);
}


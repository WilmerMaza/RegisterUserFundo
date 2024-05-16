import { Athlete } from "./models/athlete.model";

export const createUser = async (entrada: any): Promise<any> => {
return await Athlete.create(entrada);
};

export const updateUser = async (entrada: any, ID: string): Promise<number> => {
const result = await Athlete.update(entrada, { where: { ID } });
return result[0];
};

export const getUser= async (): Promise<any[]> => {
    return Athlete.findAll();
};

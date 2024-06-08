import { createUser } from "../../metodos";
import { Athlete } from "../../models/athlete.model";
import { v4 as uuidv4 } from 'uuid';

class AthleteService {
  async createAthlete(athlete: any): Promise<any> {
    const jsonnew= {...athlete,id: uuidv4()}
    return await createUser(jsonnew);
  }

  async updateAthlete(athlete: any, ID: string): Promise<number> {
    const result = await Athlete.update(athlete, { where: { id: ID } });
    return result[0];
  }
}

export const getAllAthletes = async (): Promise<any[]> => {
    return Athlete.findAll();
    };



export default new AthleteService();

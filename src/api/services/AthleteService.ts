import { createUser } from "../../metodos";

import { v4 as uuidv4 } from 'uuid';
import { User_Athlete } from "../../models/interface";
import { Athlete } from "../../models/athlete.model";

class AthleteService {
  async createAthlete(athlete: User_Athlete): Promise<User_Athlete> {
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

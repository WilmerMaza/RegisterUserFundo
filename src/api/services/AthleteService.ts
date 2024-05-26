import { createUser } from "../../metodos";
import { Athlete } from "../../models/athlete.model";

class AthleteService {
  async createAthlete(athlete: any): Promise<any> {
    return await createUser(athlete);
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

import { createUser } from "../../metodos";
import { Athlete } from "../../models/athlete.model";

class AthleteService {
  async createAthlete(athlete: any): Promise<any> {
    return await createUser(athlete);
  }

  async updateAthlete(athlete: any, ID: string): Promise<number> {
    const result = await Athlete.update(athlete, { where: { ID: ID } });
    return result[0];
  }
}

export default new AthleteService();

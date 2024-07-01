

import { v4 as uuidv4 } from 'uuid';
import { User_Athlete } from "../../models/interface";
import { Athlete } from "../../models/athlete.model";

class AthleteService {

    async findAthleteByNumeroSorteo(numeroSorteo: number): Promise<User_Athlete | null> {
        const athlete = await Athlete.findOne({ where: { Numero_Sorteo: numeroSorteo } });
        return athlete ? (athlete.toJSON() as User_Athlete) : null;
    }

    async createAthlete(athleteRequest: User_Athlete): Promise<User_Athlete> {
        const newAthlete = await Athlete.create({
            ...athleteRequest,
            Id: uuidv4()
        });
        return newAthlete.toJSON() as User_Athlete;
    }

  async updateAthlete(AthleteRequest: User_Athlete, ID: string): Promise<number> {
    const result = await Athlete.update(AthleteRequest, { where: { id: ID } });
    return result[0];
  }
}

export const getAthletesByIdPartida = async (Id_Partida: string): Promise<any[]> => {
  try {
      const athletes = await Athlete.findAll({ where: { Id_Partida: Id_Partida } });
    
      return athletes;
  } catch (err) {
      console.error('Error al consultar los atletas:', err);
      throw err;
  }
};



export default new AthleteService();

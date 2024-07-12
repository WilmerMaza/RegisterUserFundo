

import { v4 as uuidv4 } from 'uuid';
import { User_Athlete } from "../../models/interface";
import { Athlete } from "../../models/athlete.model";
class AthleteService {
  async findAthleteByNumeroSorteoAndPartida(numeroSorteo: number, idPartida: string): Promise<User_Athlete | null> {
    const athlete = await Athlete.findOne({ where: { Numero_Sorteo: numeroSorteo, Id_Partida: idPartida } });
    return athlete ? (athlete.toJSON() as User_Athlete) : null;
  }

  async createAthlete(athleteRequest: User_Athlete): Promise<User_Athlete> {
  
    const existingAthlete = await this.findAthleteByNumeroSorteoAndPartida(athleteRequest.Numero_Sorteo, athleteRequest.Id_Partida);
    if (existingAthlete) {
      throw new Error("El deportista ya está registrado en esta partida");
    }
    const athleteData = {
      ...athleteRequest,
      Id: uuidv4(),
    };

    const savedAthlete = await Athlete.create(athleteData);
    return savedAthlete.toJSON() as User_Athlete;
  }

  async updateAthlete(athleteRequest: User_Athlete, id: string): Promise<number> {
    const result = await Athlete.update(athleteRequest, { where: { Id: id } });
    return result[0];
  }
}

export const getAthletesByIdPartida = async (idPartida: string): Promise<User_Athlete[]> => {
  try {
    const athletes = await Athlete.findAll({ where: { Id_Partida: idPartida } });
    return athletes.map(athlete => athlete.toJSON() as User_Athlete);
  } catch (err) {
    console.error('Error al consultar los atletas:', err);
    throw err;
  }
};

export default new AthleteService();
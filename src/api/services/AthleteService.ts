// Assuming AthleteService is in 'src/services/AthleteService.ts'
import { createUser } from '../../metodos';
import { Athlete } from '../../models/athlete.model'; // Assuming Athlete is a Sequelize model

export const createAthlete = (athlete: any): Promise<Athlete> => {
    return createUser(athlete);
};

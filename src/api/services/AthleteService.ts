// Assuming AthleteService is in 'src/services/AthleteService.ts'
import { createUser } from '../../metodos';
import { Athlete } from '../../models/athlete.model'; // Assuming Athlete is a Sequelize model

export const createAthlete = (athlete: any): Promise<Athlete> => {
    return createUser(athlete);
};

export const updateAthlete = (athlete: Athlete, ID: string): Promise<number> => {
    return Athlete.update(athlete, { where: { ID: ID } }).then(result => result[0]);
};


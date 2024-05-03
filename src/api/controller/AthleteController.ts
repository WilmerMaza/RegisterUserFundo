
import { Request, Response } from 'express';
import { Athlete } from '../../models/athlete.model';
import { createAthlete } from '../services/AthleteService';

export const addAthlete = async (request: Request, response: Response) => {
    const athleteRequest: Athlete = request.body;
    try {
        const savedAthlete = await createAthlete(athleteRequest);
        response.status(201).json({
            message: "Usuario registrado exitosamente",
            athlete: savedAthlete
        });
    } catch (err:unknown) {
        response.status(500).json({
            message: "Error al registrar el usuario",
         
        });
    }
  }
import { Request, Response } from 'express';
import { Athlete } from '../../models/athlete.model';
import { createAthlete,  updateAthlete } from '../services/AthleteService';


export const addAthlete = async (request: Request, response: Response) => {
    const athleteRequest: Athlete = request.body;
    console.log('Datos del atleta recibidos:', athleteRequest); // Agregar esta línea para imprimir los datos recibidos
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


export const updateAthleteController = async (request: Request, response: Response) => {
    const { ID: ID } = request.params;
    const athleteRequest = request.body; 
    try {
        const affectedCount = await updateAthlete(athleteRequest, ID);
        if (affectedCount === 0) {
            return response.status(404).json({
                message: 'Usuario no encontrado'
            });
        }
        response.status(200).json({
            message: 'Usuario actualizado exitosamente',
            athlete: { ID, ...athleteRequest }
        });
    } catch {
        return response.status(500).json({
            message: 'Error al actualizar el usuario'
        });
    }
}
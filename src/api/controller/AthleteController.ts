import { Request, Response } from "express";
import AthleteService, { getAthletesByIdPartida } from "../services/AthleteService";
import { User_Athlete } from "../../models/interface";

export const addAthlete = async (request: Request, response: Response): Promise<void> => {
    const athleteRequest: User_Athlete = request.body;

    try {
        // Verificar si el deportista ya existe por Numero_Sorteo
        const existingAthlete = await AthleteService.findAthleteByNumeroSorteo(athleteRequest.Numero_Sorteo);
        if (existingAthlete) {
            response.status(400).json({
                message: "El deportista ya está registrado",
            });
            return;
        }

        // Crear el nuevo deportista
        const savedAthlete = await AthleteService.createAthlete(athleteRequest);

        response.status(201).json({
            message: "Deportista registrado exitosamente",
            athlete: savedAthlete,
        });
    } catch (err: unknown) {
        console.error("Error al registrar el deportista:", err);
        response.status(500).json({
            message: err instanceof Error ? err.message : "Error al registrar el deportista",
        });
    }
};

export const updateAthlete = async (request: Request, response: Response): Promise<void> => {
    const { ID: ID } = request.params;
    const athleteRequest = request.body;
    try {
        const affectedCount = await AthleteService.updateAthlete(
            athleteRequest,
            ID
        );
        if (affectedCount === 0) {
            response.status(404).json({
                message: "Usuario no encontrado",
            });
        } else {
            response.status(200).json({
                message: "Usuario actualizado exitosamente",
                athlete: { ID, ...athleteRequest },
            });
        }

    } catch (error) {
        response.status(500).json({
            message: `Error al actualizar el usuario ${error}`
        });
    }
};
export const getAthletesByIdPartidaController = async (request: Request, response: Response) => {
    const { idPartida } = request.params;


    try {
        const athletes = await getAthletesByIdPartida(idPartida);
        
        response.status(200).json(athletes);
    } catch (err: unknown) {
        console.error('Error al obtener los atletas:', err);
        response.status(500).json({
            message: "Error al obtener los atletas",
        });
    }
};

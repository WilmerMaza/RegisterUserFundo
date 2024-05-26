import { Request, Response } from "express";
import AthleteService, { getAllAthletes } from "../services/AthleteService";

export const addAthlete = async (request: Request, response: Response): Promise<void> => {
    const athleteRequest: any = request.body;

    try {
        const savedAthlete = await AthleteService.createAthlete(athleteRequest);
        response.status(201).json({
            message: "Usuario registrado exitosamente",
            athlete: savedAthlete,
        });
    } catch (err: unknown) {
        response.status(500).json({
            message: "Error al registrar el usuario",
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

export const getAllAthletesController = async (_request: Request, response: Response) => {
    try {
        const athletes = await getAllAthletes();
        response.status(200).json(athletes);
    } catch (err: unknown) {
        response.status(500).json({
            message: "Error al obtener los atletas"
        });
    }
};


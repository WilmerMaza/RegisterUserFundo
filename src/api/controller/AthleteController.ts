import { Request, Response } from "express";
import AthleteService from "../services/AthleteService";

export const addAthlete = async (request: Request, response: Response): Promise<void> => {
  const athleteRequest: any = request.body;
  console.log("Datos del atleta recibidos:", athleteRequest); // Agregar esta línea para imprimir los datos recibidos
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

  } catch {
    response.status(500).json({
      message: "Error al actualizar el usuario",
    });
  }
};

import { DataTypes } from "sequelize";
import sequelize from "../config/database";

export const Athlete = sequelize.define("Athlete", {

  Id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  Id_Partida: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Numero_Sorteo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  IwfCoiCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Primer_Envion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
Primer_Arranque: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

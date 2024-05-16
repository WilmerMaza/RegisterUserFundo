import { Sequelize } from "sequelize";
import { database, host, password, username } from "./ValidEnvironment";

export const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "postgres",
});

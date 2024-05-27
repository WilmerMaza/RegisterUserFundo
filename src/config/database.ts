import { Sequelize } from "sequelize";
import { AMBIENTE_API, database, host, password, username } from "./ValidEnvironment";

const sequelize =
  AMBIENTE_API === "PRO"
    ? new Sequelize({
      database,
      dialect: "postgres",
      host,
      port: 5432,
      username,
      password,
      pool: {
        max: 3,
        min: 1,
        idle: 10000,
      },
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
        keepAlive: true,
      },
      ssl: true,
    })
    : new Sequelize(database, username, password, {
      host,
      dialect: "postgres",
    });

export default sequelize;

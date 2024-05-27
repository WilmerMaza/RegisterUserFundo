import cors from "cors";
import express from "express";
import { PORT } from "./config/ValidEnvironment";
import { sequelize } from "./config/database";
import router from "./routes/Routes";

const app = express();

const allowedOrigins = ["http://tu-api-gateway.com","*"];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin!)) {
      callback(null, true);
    } else if (allowedOrigins.includes("*")) {
      // Permitir todas las solicitudes si el origen es '*'
      callback(null, true);
    } else {
      callback(new Error("Acceso no permitido por CORS"));
    }
  },
};

app.use(cors(corsOptions));
const port = PORT || 3000;

app.use(express.json());

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error: any) => {
    console.error("Unable to connect to the database:", error);
  });

app.use(router);

app.listen(port, () => {
  console.log(`Auth service running on port ${port}`);
});

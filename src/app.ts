import { sequelize } from "./config/database";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/Routes";


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

sequelize.sync({ force: false })
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error: any) => {
    console.error('Unable to connect to the database:', error);
  });

app.use(router);

app.listen(port, () => {
  console.log(`Auth service running on port ${port}`);
});






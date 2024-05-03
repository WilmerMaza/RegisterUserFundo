import express, { Application } from "express";
import 'reflect-metadata';
import { sequelize } from '../src/config/database'; // Importa la configuración de Sequelize
import router from './routes/Routes';
const app: Application = express();


app.set("port", process.env.PORT || 3000);
app.use(router);
app.use(express.json());


sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error: any) => {
    console.error('Unable to connect to the database:', error);
  });

  const server = app.listen(app.get("port"), () => {
    console.log(`Server running on http://localhost:${app.get("port")}`);
});

server.on('error', (error) => {
    console.error('Server error:', error);
});

export default app;

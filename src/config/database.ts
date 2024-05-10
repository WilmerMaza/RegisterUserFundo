import { Sequelize } from 'sequelize-typescript';
import { Athlete } from '../models/athlete.model';

export const sequelize = new Sequelize({
    dialect: 'postgres', 
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'fundo',
    models: [Athlete], 
});

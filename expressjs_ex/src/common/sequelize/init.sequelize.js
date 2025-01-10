import { Sequelize } from 'sequelize';
import initModels from '../models/init-model.js'; 

const sequelize = new Sequelize('db_food', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

// Initialize models
const models = initModels(sequelize);

export { sequelize, models };
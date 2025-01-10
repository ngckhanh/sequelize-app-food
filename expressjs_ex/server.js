import express from 'express';
import { Sequelize } from 'sequelize';
import initModels from './src/models/init-models.js'; 
import rootRouter from './src/routes/root.router.js'; 

const app = express();
const PORT = 3069;

// Middleware to parse JSON requests
app.use(express.json());

// Use the root router for routing
app.use('/api', rootRouter);

// Initialize Sequelize with the correct connection string
const sequelize = new Sequelize('mysql://root:1234@localhost:3307/db_food');

// Initialize models
initModels(sequelize);

// Start the server and sync the database
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
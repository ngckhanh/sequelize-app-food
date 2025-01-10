import express from 'express';
import { Sequelize, DataTypes } from "sequelize";
import initModels from "./src/models/init-models.js";
import rootRouter from "./src/routes/root.router.js";
import { handleError } from "./src/common/helpers/error.helper.js";


const app = express();
app.use(express.json());

app.use(handleError);

app.use(rootRouter)

// Start the server
app.listen(3069, () => {
    console.log('Service online at port 3069');  // Log the port number
});

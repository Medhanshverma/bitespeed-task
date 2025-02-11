import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


sequelize.authenticate().then(() => console.log("Database connected successfully")).catch((err) => console.error("Error connecting to database", err));

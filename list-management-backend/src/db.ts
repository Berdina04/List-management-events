import { Sequelize } from "sequelize";
import { initModels } from "./models";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "rooming_db",
  process.env.DB_USER || "postgres",
  process.env.DB_PASS || "postgres",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    logging: false,
  }
);

const models = initModels(sequelize);


export const db = {
  sequelize,
  ...models,
};